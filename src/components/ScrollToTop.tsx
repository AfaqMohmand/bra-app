"use client";
import { useEffect } from "react";

// This component will automatically scroll to top when route changes
const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};

export default ScrollToTop;
