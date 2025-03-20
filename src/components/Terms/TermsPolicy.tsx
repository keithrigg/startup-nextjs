import SectionTitle from "../Common/SectionTitle";

const TermsOfUse = () => {
  return (
    <section id="terms" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <SectionTitle
                title="Inovize Solutions Ltd - Terms of Use"
                paragraph="Effective Date: 20 March 2025"
                mb="44px"
              />
              <div data-wow-delay=".15s" className="mb-12">
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  Welcome to Inovize Solutions Ltd ("Inovize," "we," "our," "us").
                  By accessing and using our website (the "Site"), you agree to
                  comply with and be bound by these Terms of Use. If you do not
                  agree with any part of these terms, please do not use our Site.
                </p>

                <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                  1. Acceptance of Terms
                </h3>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  These Terms of Use govern your use of our Site and services.
                  We may update these terms from time to time, and your continued
                  use of the Site constitutes acceptance of the updated terms.
                </p>

                <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                  2. Intellectual Property Rights
                </h3>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  All content on this Site, including text, graphics, logos,
                  images, and software, is the property of Inovize Solutions Ltd
                  or its licensors and is protected by intellectual property laws.
                  You may not reproduce, distribute, or modify any content without
                  our prior written consent.
                </p>

                <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                  3. Permitted Use
                </h3>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  You may use our Site for lawful purposes only. You agree not to:
                </p>
                <ul className="mb-6 list-disc pl-5 text-base leading-relaxed text-body-color">
                  <li>Violate any laws or regulations.</li>
                  <li>Disrupt or interfere with the security of the Site.</li>
                  <li>Attempt to gain unauthorized access to our systems.</li>
                  <li>Scrape, copy, or harvest data without our permission.</li>
                </ul>

                <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                  4. Disclaimers & Limitations of Liability
                </h3>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  The Site is provided "as is" without warranties of any kind.
                  We do not guarantee that the Site will be error-free or
                  uninterrupted. To the fullest extent permitted by law, Inovize
                  disclaims all liability for any damages arising from your use of
                  the Site.
                </p>

                <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                  5. External Links
                </h3>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  Our Site may contain links to third-party websites. We are not
                  responsible for the content or privacy policies of these
                  external sites.
                </p>

                <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                  6. Termination
                </h3>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  We reserve the right to terminate or restrict your access to the
                  Site if you violate these Terms of Use.
                </p>

                <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                  7. Governing Law
                </h3>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  These Terms of Use are governed by the laws of England and
                  Wales. Any disputes arising from these terms will be resolved
                  in the courts of England and Wales.
                </p>

                <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                  8. Contact Us
                </h3>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  If you have any questions about these Terms of Use, you can
                  contact us at:
                </p>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  Inovize Solutions Ltd
                  <br />
                  20 Wenlock Road, London, N1 7GU, United Kingdom
                  <br />
                  <a href="mailto:info@inovize.co.uk" className="text-primary hover:underline">
                    info@inovize.co.uk
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfUse;
