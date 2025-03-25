"use client";

import { forwardRef, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

const FooterBase = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ ...props }, ref) => {
    const { theme, systemTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;

    // Prevent hydration issues
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      setMounted(true);
    }, []);

    return (
      <footer
        ref={ref}
        {...props}
        className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {/* Left column: Logo, text, social icons */}
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                {/* Logo */}
                <Link href="/" className="mb-2 inline-block">
                  {mounted && currentTheme === "dark" ? (
                    <Image
                      src="/images/logo/inovize_device+logo_reverse.png"
                      alt="Inovize logo (dark mode)"
                      width={250}
                      height={50}
                    />
                  ) : (
                    <Image
                      src="/images/logo/inovize_device+logo_colour.png"
                      alt="Inovize logo (light mode)"
                      width={250}
                      height={50}
                    />
                  )}
                </Link>

                {/* Text under logo */}
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Specialists in Intelligent Automation Solutions
                </p>

                {/* Social icons */}
                <div className="flex items-center">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/inovize"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      className="fill-current"
                    >
                      <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                    </svg>
                  </a>

                  {/* X (Twitter) */}
                  <a
                    href="https://x.com/inovize"
                    aria-label="X"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@inovize"
                    aria-label="YouTube"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      className="fill-current"
                    >
                      <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 0 9.0627 0 9.0627 0C9.0627 0 3.54766 0 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* 1) Remove Terms & Policies columns entirely */}
          </div>

          {/* Horizontal line */}
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
  }
);

FooterBase.displayName = "Footer";

export default FooterBase;