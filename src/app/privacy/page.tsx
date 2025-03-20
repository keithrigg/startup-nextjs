import PrivacyPolicy from "@/components/Privacy/PrivacyPolicy";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Inovize",
  description: "Inovize Solutions Ltd - Privacy Policy",
  // other metadata
};

const PrivacyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Privacy Policy"
        description="Inovize Solutions Ltd - Privacy Policy."
      />
      <PrivacyPolicy />
    </>
  );
};

export default PrivacyPage;