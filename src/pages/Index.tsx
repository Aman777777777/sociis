import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    window.location.replace("/site.html" + window.location.hash);
  }, []);
  return null;
};

export default Index;
