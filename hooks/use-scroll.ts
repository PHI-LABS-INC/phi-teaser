"use client";

import { useEffect, useState } from "react";

export function useScroll() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const isDesktop = window.innerWidth >= 768;
    const heroHeight = isDesktop ? 1024 : 434;
    const pos = window.scrollY + window.innerHeight;
    setIsScrolled(window.scrollY !== 0 && pos > heroHeight * (isDesktop ? 1.25 : 1.75));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isScrolled;
}
