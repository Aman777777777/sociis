import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Serve the static HTML site at the root URL
    window.location.replace("/site.html");
  }, []);

  return null;
};

export default Index;
