import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.location.replace("/privacy-policy.html" + window.location.hash);
  }, []);
  return null;
};

export default PrivacyPolicy;
