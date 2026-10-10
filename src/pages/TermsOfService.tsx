import { useEffect } from "react";

const TermsOfService = () => {
  useEffect(() => {
    window.location.replace("/terms-of-service.html" + window.location.hash);
  }, []);
  return null;
};

export default TermsOfService;
