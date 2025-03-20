"use client";

import { forwardRef, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

const FooterBase = forwardRef<HTMLElement, FooterProps>(({ ...props }, ref) => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  // ✅ Add `mounted` state to prevent hydration issues
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer ref={ref} {...props} className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Left column */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
            <Link href="/" className="mb-8 inline-block">
              {mounted && currentTheme === "dark" ? (
                <img
                  src="/images/logo/inovize_device+logo_reverse.png"
                  alt="Inovize logo (dark mode)"
                  width={250}
                  height={50}
                />
              ) : (
                <img
                  src="/images/logo/inovize_device+logo_colour.png"
                  alt="Inovize logo (light mode)"
                  width={250}
                  height={50}
                />
              )}
            </Link>
              <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                Specialists in Intelligent Automation Solutions
              </p>
              <div className="flex items-center">
                <a
                  href="https://x.com/inovize"
                  aria-label="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                >
                  {/* SVG icon */}
                </a>
                <a
                  href="/"
                  aria-label="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                >
                  {/* SVG icon */}
                </a>
                <a
                  href="/"
                  aria-label="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                >
                  {/* SVG icon */}
                </a>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                Useful Links
              </h2>
              <ul>
                <li>
                  <Link
                    href="/blog"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Terms */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                Terms
              </h2>
              <ul>
                <li>
                  <Link
                    href="/"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    TOS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Support & Help */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                Support & Help
              </h2>
              <ul>
                <li>
                  <Link
                    href="/contact"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    Open Support Ticket
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]" />

        {/* Footer bottom area */}
        <div className="py-8 flex flex-col gap-4 items-start sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xxl text-sm leading-relaxed text-body-color dark:text-body-color-dark">
            <p>
              Inovize Solutions Ltd (trading as <em>Inovize</em>). Registered in
              England &amp; Wales, Company No. 16214067
            </p>
            <p>
              Registered Office: 20 Wenlock Road, London, England, N1 7GU. VAT
              Registration No. GB 486 6043 64
            </p>
          </div>
          <div className="text-right text-sm text-body-color dark:text-body-color-dark">
            <p>
              © 2025{" "}
              <a
                href="https://www.inovize.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Inovize Solutions Ltd
              </a>
            </p>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute right-0 top-14 z-[-1]">
        {/* ... the existing SVG elements ... */}
      </div>
      <div className="absolute bottom-24 left-0 z-[-1]">
        {/* ... the existing SVG elements ... */}
      </div>
    </footer>
  );
});

// 2️⃣ Ensure Next.js doesn't throw a warning
FooterBase.displayName = "Footer";

export default FooterBase;