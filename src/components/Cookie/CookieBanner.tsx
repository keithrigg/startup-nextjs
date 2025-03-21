import { useState, useEffect } from "react";
import Link from "next/link";
import { FiSettings } from "react-icons/fi";

interface CookieBannerProps {
  footerRef: React.RefObject<HTMLElement>;
}

const CookieBanner = ({ footerRef }: CookieBannerProps) => {
  const [showBanner, setShowBanner] = useState(false);
  const [userHasMadeChoice, setUserHasMadeChoice] = useState(false);
  const [footerInView, setFooterInView] = useState(false);

  useEffect(() => {
    // Check localStorage for prior consent
    const hasConsent = localStorage.getItem("cookieConsent");
    if (!hasConsent) {
      setShowBanner(true);
      setUserHasMadeChoice(false);
    } else {
      setShowBanner(false);
      setUserHasMadeChoice(true);
    }
  }, []);

  useEffect(() => {
    // Ensure footerRef is valid before setting up the observer
    if (!footerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Footer isIntersecting:", entry.isIntersecting);
        setFooterInView(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Adjust based on when you want the icon to appear
      }
    );

    observer.observe(footerRef.current);

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, [footerRef]);

  // Accept/Decline handlers
  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
    setUserHasMadeChoice(true);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setShowBanner(false);
    setUserHasMadeChoice(true);
  };

  // Re-open cookie banner
  const reopenBanner = () => {
    setShowBanner(true);
  };

  return (
    <>
      {/* The floating icon appears only if user has made a choice AND footer is in view */}
      {userHasMadeChoice && footerInView && (
        <button
          onClick={reopenBanner}
          title="Cookie Settings"
          className="fixed left-4 bottom-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-md hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/60"
        >
          <FiSettings className="text-2xl" />
        </button>
      )}

      {/* Cookie Consent Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 z-40 w-full bg-gray-800 px-4 py-2 text-sm text-white">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 sm:flex-row sm:gap-4">
            <p className="flex-1 whitespace-normal sm:whitespace-nowrap">
              We use cookies to improve user experience. By clicking &#34;Accept&#34;, you
              consent to our use of non-essential cookies. For more details, please see our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>.
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={handleAccept}
                className="rounded-sm bg-green-500 px-4 py-2 text-white hover:bg-green-600"
              >
                Accept
              </button>
              <button
                onClick={handleDecline}
                className="rounded-sm bg-primary px-4 py-2 text-white hover:bg-primary/80"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;