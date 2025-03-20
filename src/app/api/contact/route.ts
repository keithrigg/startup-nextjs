import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// Keep your existing keys as-is (no changes here):
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req: Request) {
  try {
    // Parse JSON from the request, including the new fields
    const { name, email, message, turnstileToken, company, phone, pillars } = await req.json();

    // 1) Validate Turnstile token
    const turnstileRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: turnstileToken || "",
        }),
      }
    ).then((r) => r.json());

    // Log the Turnstile response for debugging
    console.log("Turnstile verify response:", turnstileRes);

    if (!turnstileRes.success) {
      // Optionally log error-codes for deeper insight
      console.log("Turnstile error-codes:", turnstileRes["error-codes"]);
      return NextResponse.json({ message: "Turnstile verification failed" }, { status: 400 });
    }

    // 2) Send email via SendGrid
    // Incorporate the new fields into the message body
    const msg = {
      to: "info@inovize.com",
      from: "website@inovize.com",
      subject: `New Contact from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Company: ${company || "(Not provided)"}
Phone: ${phone || "(Not provided)"}
Pillars of Interest: ${Array.isArray(pillars) && pillars.length > 0 ? pillars.join(", ") : "(None selected)"}

Message:
${message}
`,
    };

    try {
      // Capture the SendGrid response for logging
      const [sendResult] = await sgMail.send(msg);
      console.log("SendGrid send result:", sendResult);
    } catch (sendErr) {
      console.error("SendGrid error:", sendErr);
      return NextResponse.json({ message: "SendGrid send failed" }, { status: 500 });
    }

    // Return success
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}