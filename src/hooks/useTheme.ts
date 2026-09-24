"use client";
import { useEffect, useState } from "react";
export function useTheme() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    try {
      setDark(localStorage.getItem("portfolio-theme") === "dark");
    } catch {}
  }, []);
  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try {
      localStorage.setItem("portfolio-theme", next ? "dark" : "light");
    } catch {}
  }
  return { dark, toggle };
}
