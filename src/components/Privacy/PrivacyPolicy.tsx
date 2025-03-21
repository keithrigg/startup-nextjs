import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";
import { FiSettings } from "react-icons/fi";

const PrivacyPolicy = () => {
  return (
    <section id="privacy" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <SectionTitle
                title="Inovize Solutions Ltd - Privacy Policy"
                paragraph="Effective Date: 20 March 2025"
                mb="44px"
              />

              <div data-wow-delay=".15s" className="mb-12"></div>
              <div data-wow-delay=".15s" className="mb-12">
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  Inovize Solutions Ltd (&#34;Inovize,&#34; &#34;we,&#34; &#34;our,&#34; &#34;us&#34;) is committed
                  to protecting your personal data and respecting your privacy.
                  This Privacy Policy explains how we collect, process, and
                  protect your personal information when you visit our website,
                  interact with us, or use our services. We comply fully with the
                  UK General Data Protection Regulation (UK GDPR) and the Data
                  Protection Act 2018.
                </p>

                <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                  Cookies
                </h3>
                <p className="mb-2 text-base leading-relaxed text-body-color">
                  We use cookies to ensure optimal performance of our website.
                  Our cookies include:
                </p>
                <ul className="mb-6 list-disc pl-5 text-base leading-relaxed text-body-color">
                  <li>Necessary cookies for website functionality</li>
                  <li>
                    Analytical cookies (e.g. Google Analytics) to understand
                    how visitors engage with our website
                  </li>
                  <li>Performance cookies to enhance user experience</li>
                </ul>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  For further details regarding our use of cookies, please refer to our {" "}
                  <Link href="/cookie" className="text-primary hover:underline">
                    Cookie Policy
                  </Link>{" "}
                  page.
                </p>

                <p className="mb-6 text-base leading-relaxed text-body-color flex items-center">
                  You can adjust your cookie preferences at any time via your broswer settings, or alternatively, you can change your cookie preferences by clicking the floating cookie settings icon located at the bottom-left corner of the website.
                  <p>
                  <button
                  title="Cookie Settings"
                  className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white shadow-md hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/60"
                  >
                  <FiSettings className="text-xl" />
                </button>
                </p>
                </p>


                <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                  International Data Transfers
                </h3>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  Where we transfer your data outside the UK/EEA, we will ensure
                  adequate safeguards are in place, such as using standard
                  contractual clauses or other ICO-approved transfer mechanisms,
                  ensuring your data remains protected.
                </p>

                <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                  Your Rights
                </h3>
                <p className="mb-2 text-base leading-relaxed text-body-color">
                  Under UK GDPR, you have the following rights regarding your
                  personal data:
                </p>
                <ul className="mb-6 list-disc pl-5 text-base leading-relaxed text-body-color">
                  <li>Right of access</li>
                  <li>Right to rectification</li>
                  <li>Right to erasure (&#34;right to be forgotten&#34;)</li>
                  <li>Right to restrict processing</li>
                  <li>Right to object to processing</li>
                  <li>Right to data portability</li>
                  <li>Right to withdraw consent at any time (where applicable)</li>
                </ul>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  To exercise any of these rights or request information, please contact us at{" "}
                  <a href="mailto:privacy@inovize.com" className="text-primary hover:underline">privacy@inovize.com</a>.
                </p>

                <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                  Contact Information
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
                  <a href="mailto:privacy@inovize.com" className="text-primary hover:underline">privacy@inovize.com</a>
                </p>
                <p className="text-base leading-relaxed text-body-color">
                  If you have unresolved concerns, you can contact the
                  Information Commissioner’s Office (ICO) at{" "}
                  <a
                    href="https://ico.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://ico.org.uk
                  </a>{" "}
                  or by phone at{" "}
                  <a href="tel:03031231113" className="text-primary hover:underline">
                    0303 123 1113
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;