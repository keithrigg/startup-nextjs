"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent head.js.
        More info: https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        {/* Turnstile script with ?onload=turnstileReady */}
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=turnstileReady"
          async
          defer
        />
        {/*
          We'll define the global turnstileReady function in another Script
          so it’s available after the main script loads.
        */}
        <Script id="turnstile-global">
          {`
            // This function is called once the Turnstile script is loaded
            window.turnstileReady = function() {
              console.log("Turnstile script loaded. You can now call turnstile.render(...)");
            };
          `}
        </Script>
      </head>

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}