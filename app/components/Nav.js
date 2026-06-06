"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import styles from "./Nav.module.css";

const LINKS = [
  { label: "Story", href: "#story" },
  { label: "Vestafi", href: "#vestafi" },
  { label: "Journey", href: "#journey" },
  { label: "Letters", href: "#letters" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand} onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav className={styles.links} aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#vestafi" className={`btn btn--dark ${styles.cta}`}>
          Invest in Vestafi
        </a>

        <button
          className={styles.burger}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className={styles.mobile}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#vestafi" className="btn btn--dark" onClick={() => setOpen(false)}>
            Invest in Vestafi
          </a>
        </div>
      )}
    </header>
  );
}
