import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import { FiSettings } from "react-icons/fi";

const CookiePolicy = () => {
  return (
    <section id="cookie" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <SectionTitle
                title="Inovize Solutions Ltd - Cookie Policy"
                paragraph="Effective Date: 20 March 2025"
                mb="44px"
              />

              <div data-wow-delay=".15s" className="mb-12 text-base leading-relaxed text-body-color">
                {/* Introduction */}
                <p className="mb-6">
                  This Cookie Policy explains how Inovize Solutions Ltd
                  (&quot;Inovize,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;)
                  uses cookies and similar tracking technologies on our website{" "}
                  <a
                    href="https://www.inovize.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    www.inovize.com
                  </a>
                  . It should be read together with our{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>.
                  <br />
                  We are committed to upholding your privacy rights and ensuring
                  that any use of cookies complies with guidelines set by
                  regulatory authorities such as the UK Information Commissioner’s
                  Office (ICO).
                </p>

                {/* 1. What Are Cookies? */}
                <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                  1. What Are Cookies?
                </h3>
                <p className="mb-6">
                  Cookies are small text files placed on your device by websites you
                  visit. They help websites function properly, remember user
                  preferences, and collect information to improve user experience or
                  deliver relevant services. We only use cookies in ways that adhere
                  to data protection regulations and respect your privacy choices.
                </p>

                {/* 2. Why We Use Cookies */}
                <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                  2. Why We Use Cookies
                </h3>
                <p className="mb-2">We use cookies to:</p>
                <ul className="mb-6 list-disc pl-5">
                  <li>
                    Ensure the website operates correctly and securely (e.g.,
                    verifying legitimate visitors, preventing bot attacks).
                  </li>
                  <li>Understand how users interact with our site (analytics).</li>
                  <li>Improve our services, content, and user experience.</li>
                  <li>
                    Protect our forms against bots using Cloudflare Turnstile, in
                    line with ICO recommendations on appropriate security measures.
                  </li>
                </ul>

                {/* 3. Types of Cookies We Use */}
                <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                  3. Types of Cookies We Use
                </h3>
                <p className="mb-6">
                  In line with ICO guidance, we categorize cookies according to their
                  purpose. Currently, our site primarily uses security- and
                  performance-related cookies from Cloudflare. These are considered
                  essential for verifying legitimate visitors and enhancing site
                  performance.
                </p>

                {/* 4. Cookies in Use */}
                <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                  4. Cookies in Use
                </h3>
                <p className="mb-2">
                  Below is a list of the Cloudflare cookies that may be placed on
                  your device when visiting our site:
                </p>
                <table className="mb-6 w-full table-auto border-collapse text-left text-sm">
                  <thead>
                    <tr>
                      <th className="border-b p-2">Name</th>
                      <th className="border-b p-2">Domain</th>
                      <th className="border-b p-2">Purpose</th>
                      <th className="border-b p-2">Expiration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b p-2">edgesessions_enabled</td>
                      <td className="border-b p-2">dash.cloudflare.com</td>
                      <td className="border-b p-2">
                        Security / form protection (Cloudflare Turnstile)
                      </td>
                      <td className="border-b p-2">Session</td>
                    </tr>
                    <tr>
                      <td className="border-b p-2">__cfruid</td>
                      <td className="border-b p-2">.dash.cloudflare.com</td>
                      <td className="border-b p-2">
                        Security / form protection (Cloudflare Turnstile)
                      </td>
                      <td className="border-b p-2">Session</td>
                    </tr>
                    <tr>
                      <td className="border-b p-2">_cfuvid</td>
                      <td className="border-b p-2">.dash.cloudflare.com</td>
                      <td className="border-b p-2">
                        Security / form protection (Cloudflare Turnstile)
                      </td>
                      <td className="border-b p-2">Session</td>
                    </tr>
                    <tr>
                      <td className="border-b p-2">_ga</td>
                      <td className="border-b p-2">.cloudflare.com</td>
                      <td className="border-b p-2">
                        Cloudflare performance/analytics
                      </td>
                      <td className="border-b p-2">2 years</td>
                    </tr>
                    <tr>
                      <td className="border-b p-2">kndctr_8AD56F28618AA...</td>
                      <td className="border-b p-2">.cloudflare.com</td>
                      <td className="border-b p-2">
                        Cloudflare performance/analytics
                      </td>
                      <td className="border-b p-2">Varies</td>
                    </tr>
                    <tr>
                      <td className="border-b p-2">_ga_8BK794H3J9</td>
                      <td className="border-b p-2">.cloudflare.com</td>
                      <td className="border-b p-2">
                        Cloudflare performance/analytics
                      </td>
                      <td className="border-b p-2">2 years</td>
                    </tr>
                  </tbody>
                </table>
                <p className="mb-6">
                  These cookies are essential or primarily used for security and
                  performance. We do not use them to personally identify you, and
                  any analytics data gathered is used solely to enhance site
                  functionality and protect against fraudulent or malicious
                  activity.
                </p>

                {/* 5. How to Manage Cookies */}
                <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                  5. How to Manage Cookies
                </h3>
                <p className="mb-6">
                  You can manage or delete cookies at any time via your browser
                  settings. Most browsers allow you to block cookies or alert you
                  before a cookie is placed on your device:
                </p>
                <ul className="mb-6 list-disc pl-5">
                  <li>
                    <a
                      href="https://support.microsoft.com/en-us/topic/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Internet Explorer
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.google.com/accounts/answer/61416"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Apple Safari
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Microsoft Edge
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Mozilla Firefox
                    </a>
                  </li>
                </ul>

                <p className="mb-6">
                  Please note that blocking or deleting cookies may affect how
                  certain features of the website function. We will always respect
                  your preference and handle any data in accordance with applicable
                  data protection laws.
                </p>

                {/* 6. Updates to this Policy */}
                <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                  6. Updates to this Policy
                </h3>
                <p className="mb-6">
                  We may update this Cookie Policy to reflect changes in
                  technology, legislation, or our business practices. The
                  “Effective Date” at the top of this page indicates when this
                  policy was last revised. We encourage you to review this page
                  periodically to stay informed about our use of cookies.
                </p>

                {/* 7. Contact Us */}
                <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                  7. Contact Us
                </h3>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  For any questions regarding this policy or your personal data,
                  please contact us at:
                </p>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  Data Protection Officer
                  <br />
                  Inovize Solutions Ltd
                  <br />
                  20 Wenlock Road, London, N1 7GU, United Kingdom
                  <br />
                  <a href="mailto:privacy@inovize.co.uk" className="text-primary hover:underline">privacy@inovize.co.uk</a>
                </p>

                <p className="mb-6">
                  You can also find more general information about cookies and
                  your rights at the{" "}
                  <a
                    href="https://ico.org.uk/global/cookies/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    ICO website
                  </a>
                  , including guidance on how to manage or disable cookies via your
                  browser settings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookiePolicy;