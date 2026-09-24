"use client";
import { useState } from "react";
import { Menu, X, Moon, Sun, ArrowUpRight } from "lucide-react";
import { portfolioData as data } from "../data/portfolioData";
import { useTheme } from "../hooks/useTheme";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { dark, toggle } = useTheme();
  return (
    <header className="site-header">
      <a className="brand" href="/#home">
        <span className="monogram">
          {data.personalInfo.initials}
          <span>.</span>
        </span>
        <span>{data.personalInfo.shortName}</span>
      </a>
      <nav
        aria-label="Main navigation"
        className={open ? "nav-links open" : "nav-links"}
      >
        {data.navigation.map((label) => (
          <a
            key={label}
            href={`/#${label.toLowerCase()}`}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
      <div className="nav-actions">
        <button
          className="icon-button"
          aria-label={dark ? "Use light theme" : "Use dark theme"}
          onClick={toggle}
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <a className="nav-contact" href="/#contact">
          Let’s talk <ArrowUpRight size={16} />
        </a>
        <button
          className="icon-button mobile-menu"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
