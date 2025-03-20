"use client";

import { useRef, useEffect } from "react";
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // 1️⃣ Ensure footerRef is initialized correctly
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (footerRef.current) {
      console.log("Footer ref after mount:", footerRef.current);
    } else {
      console.warn("Footer ref is still null on mount.");
    }
  }, []);

  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=turnstileReady"
          async
          defer
        />
        <Script id="turnstile-global">
          {`
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

          {/* 2️⃣ Ensure `ref` is passed to Footer */}
          <Footer ref={footerRef} />

          <ScrollToTop />

          {/* 3️⃣ Ensure `footerRef` is passed to CookieBanner */}
          <CookieBanner footerRef={footerRef} />
        </Providers>
      </body>
    </html>
  );
}