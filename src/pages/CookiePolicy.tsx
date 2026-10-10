import { useEffect } from "react";

const CookiePolicy = () => {
  useEffect(() => {
    window.location.replace("/cookie-policy.html" + window.location.hash);
  }, []);
  return null;
};

export default CookiePolicy;
