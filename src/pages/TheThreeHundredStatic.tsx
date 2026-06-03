import { useEffect } from "react";

const TheThreeHundredStatic = () => {
  useEffect(() => {
    window.location.replace("/the300.html");
  }, []);
  return null;
};

export default TheThreeHundredStatic;
