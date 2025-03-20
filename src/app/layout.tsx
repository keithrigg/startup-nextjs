"use client";

import { useRef } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from "./providers";
import CookieBanner from "@/components/Cookie/CookieBanner";
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
  // 1. Create a ref to pass to the Footer.
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <html suppressHydrationWarning lang="en">
      <head>
        {/* Turnstile script with ?onload=turnstileReady */}
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=turnstileReady"
          async
          defer
        />
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

          {/* 2. Pass the ref to Footer so we can observe it. */}
          <Footer ref={footerRef} />

          <ScrollToTop />

          {/* 3. Pass the same ref to CookieBanner */}
          <CookieBanner footerRef={footerRef} />
        </Providers>
      </body>
    </html>
  );
}