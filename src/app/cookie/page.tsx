import CookiePolicy from "@/components/Cookie/CookiePolicy";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Inovize",
  description: "Inovize Solutions Ltd - Privacy Policy",
  // other metadata
};

const CookiePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Cookie Policy"
        description="Inovize Solutions Ltd - Cookie Policy."
      />
      <CookiePolicy />
    </>
  );
};

export default CookiePage;