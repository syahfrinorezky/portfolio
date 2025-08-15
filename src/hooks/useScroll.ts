/** @format */

import { useState } from "react";

export const useScroll = (threshold: number) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > threshold) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return { isScrolled, handleScroll };
};
