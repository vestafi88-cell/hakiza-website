"use client";

import { useEffect, useRef, useState } from "react";
import Placeholder from "./Placeholder";
import styles from "./Hero.module.css";

const WORDS = ["Entrepreneur", "Founder", "Builder"];
const INTERVAL = 2800;
const DURATION = 350;

export default function Hero() {
  const [word, setWord] = useState(WORDS[0]);
  const elRef = useRef(null);

  useEffect(() => {
    let index = 0;
    const el = elRef.current;

    const timer = setInterval(() => {
      if (!el) return;
      // exit: fade out + slide up
      el.style.opacity = "0";
      el.style.transform = "translateY(-6px)";

      setTimeout(() => {
        index = (index + 1) % WORDS.length;
        setWord(WORDS[index]);
        // enter: fade back in
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, DURATION);
    }, INTERVAL);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section section--warm" id="top">
      <div className={`container ${styles.hero} grid-2`}>
        <div className={styles.left}>
          <p className={styles.greeting}>Hello, I&rsquo;m</p>
          <h1 className={styles.name}>Hakiza Ronald</h1>

          <p className={styles.roleLine}>
            <span
              id="hero-word"
              ref={elRef}
              className={styles.word}
              style={{
                transition: `opacity ${DURATION}ms ease, transform ${DURATION}ms ease`,
              }}
            >
              {word}
            </span>
          </p>

          <blockquote className={`blockquote ${styles.quote}`}>
            I embrace unconventional strategies, often disregarded by
            conventional approaches, to achieve remarkable outcomes. Methods
            that may not conform to the preferences of traditional Ivy League
            perspectives.
          </blockquote>

          <div className={styles.actions}>
            <a href="#story" className="btn btn--outline">About Me</a>
            <a href="#vestafi" className="btn btn--gold">Invest in Vestafi</a>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.photoWrap}>
            {/* Drop hero portrait into /public/images/hakiza-hero.jpg and pass src */}
            <Placeholder
              label="Portrait"
              alt="Hakiza Ronald, founder and CEO of Vestafi, East African entrepreneur"
              ratio="3 / 4"
              priority
            />
            <div className={styles.badge}>
              <span className={styles.badgeAmount}>$100K</span>
              <span className={styles.badgeDot}>·</span>
              <span>Africa Award Casablanca</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
