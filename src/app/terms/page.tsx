import TermsPolicy from "@/components/Terms/TermsPolicy";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use Policy | Inovize",
  description: "Inovize Solutions Ltd - Terms of Use Policy",
  // other metadata
};

const TermsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Terms of Use Policy"
        description="Inovize Solutions Ltd - Terms of Use Policy."
      />
      <TermsPolicy />
    </>
  );
};

export default TermsPage;