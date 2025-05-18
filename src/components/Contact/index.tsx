"use client";

import React, { useState, useEffect } from "react";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

// Define the available pillars
const AVAILABLE_PILLARS = [
  "iPaaS / Integration",
  "API Management",
  "Low-Code App Dev",
  "Custom App Dev",
  "Observability",
  "Agentic AI",
];

const Contact = () => {
  // Existing fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // New fields
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [pillars, setPillars] = useState<string[]>([]);

  // Turnstile token
  const [turnstileToken, setTurnstileToken] = useState("");

  // Render Turnstile widget explicitly once the script is loaded
  useEffect(() => {
    function renderWidget() {
      if ((window as any).turnstile) {
        (window as any).turnstile.render("#turnstile-widget", {
          sitekey: TURNSTILE_SITE_KEY,
          callback: (token: string) => setTurnstileToken(token),
          theme: "auto",
        });
      }
    }

    // If script is already loaded, call render immediately
    if ((window as any).turnstile && (window as any).turnstileIsLoaded) {
      renderWidget();
    } else {
      // Overwrite turnstileReady so that once the script loads, it calls render
      (window as any).turnstileReady = () => {
        console.log("Turnstile script loaded; now rendering widget");
        (window as any).turnstileIsLoaded = true;
        renderWidget();
      };
    }
  }, []);

  // Handle checkbox toggles for the pillars
  const handlePillarChange = (pillar: string) => {
    setPillars((prev) => {
      if (prev.includes(pillar)) {
        return prev.filter((p) => p !== pillar);
      }
      return [...prev, pillar];
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!turnstileToken) {
      alert("Please complete the Turnstile challenge before submitting.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          turnstileToken,
          company,
          phone,
          pillars,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Success: " + result.message);
        // Reset fields
        setName("");
        setEmail("");
        setMessage("");
        setCompany("");
        setPhone("");
        setPillars([]);
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Error sending contact form:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Have a Project in Mind?
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Submit your enquiry below and our team of experts will get back to you.
              </p>

              {/* Contact Form */}
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  {/* Name Field */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 
                                   text-base text-body-color outline-none focus:border-primary 
                                   dark:border-transparent dark:bg-[#2C303B] 
                                   dark:text-body-color-dark dark:shadow-two 
                                   dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 
                                   text-base text-body-color outline-none focus:border-primary 
                                   dark:border-transparent dark:bg-[#2C303B] 
                                   dark:text-body-color-dark dark:shadow-two 
                                   dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                    </div>
                  </div>

                  {/* Company Field */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="company"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your company name"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 
                                   text-base text-body-color outline-none focus:border-primary 
                                   dark:border-transparent dark:bg-[#2C303B] 
                                   dark:text-body-color-dark dark:shadow-two 
                                   dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 
                                   text-base text-body-color outline-none focus:border-primary 
                                   dark:border-transparent dark:bg-[#2C303B] 
                                   dark:text-body-color-dark dark:shadow-two 
                                   dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>

                  {/* Technology Pillars (Checkboxes) */}
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Which technologies are you interested in?
                      </label>
                      <div className="flex flex-wrap gap-4">
                        {AVAILABLE_PILLARS.map((p, idx) => (
                          <label
                            key={idx}
                            className="flex items-center text-sm text-dark dark:text-white"
                          >
                            <input
                              type="checkbox"
                              className="mr-2"
                              checked={pillars.includes(p)}
                              onChange={() => {
                                if (pillars.includes(p)) {
                                  setPillars((prev) => prev.filter((val) => val !== p));
                                } else {
                                  setPillars((prev) => [...prev, p]);
                                }
                              }}
                            />
                            {p}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 
                                   text-base text-body-color outline-none focus:border-primary 
                                   dark:border-transparent dark:bg-[#2C303B] 
                                   dark:text-body-color-dark dark:shadow-two 
                                   dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                    </div>
                  </div>

                  {/* Turnstile widget & Submit button */}
                  <div className="w-full px-4 mb-6">
                    {/* 
                      Force row layout on large screens (sm+)
                      and vertically center the items 
                    */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 min-h-[80px]">
                      {/* Turnstile widget container */}
                      <div id="turnstile-widget" className="flex items-center">
                        {/* The widget will be rendered here in useEffect */}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white 
                                  shadow-submit duration-300 hover:bg-primary/90 
                                  dark:shadow-submit-dark"
                      >
                        Submit Enquiry
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;