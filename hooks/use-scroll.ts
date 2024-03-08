"use client";

import { useEffect, useState } from "react";

export function useScroll({ pos }: { pos: number }) {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    // TODO: mobile
    setIsScrolled(window.scrollY > pos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isScrolled;
}
