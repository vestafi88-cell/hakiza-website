import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Logo from "./components/Logo";
import Placeholder from "./components/Placeholder";
import ContactForm from "./components/ContactForm";
import TikTokFeed from "./components/TikTokFeed";
import { getTikTokFeed, TIKTOK_PROFILE, TIKTOK_HANDLE } from "./lib/tiktok";
import styles from "./page.module.css";

const JOURNEY = [
  { when: "Now", role: "Founder & CEO", org: "Vestafi" },
  { when: "2021", role: "Country Manager", org: "Treepz Uganda" },
  { when: "2016–21", role: "Founder & CEO", org: "Ugabus.com (acquired by Treepz)" },
  { when: "2016", role: "Delegate", org: "Global Entrepreneurship Summit, California" },
  { when: "2015", role: "YALI Fellow", org: "Young African Leaders Initiative" },
  { when: "2010–13", role: "Project Officer", org: "Straight Talk Foundation" },
];

const AWARDS = [
  { title: "Africa Entrepreneurship Award", meta: "Casablanca · 2018 · $100,000" },
  { title: "Best Entrepreneur", meta: "U.S. Mission Uganda · 2022" },
  { title: "YALI Fellow", meta: "Young African Leaders Initiative" },
  { title: "GES Delegate", meta: "California · 2016" },
];

const PRESS = [
  { name: "CNN", href: "#" },
  { name: "New Vision", href: "#" },
  { name: "City TV", href: "#" },
  { name: "TechCrunch", href: "#" },
];

const LETTERS = [
  { title: "On building before the market is ready", meta: "Letter No. 01" },
  { title: "Why fractional ownership changes everything", meta: "Letter No. 02" },
  { title: "What fifteen years taught me about patience", meta: "Letter No. 03" },
];

const GALLERY = [
  { label: "Casablanca · 2018", wide: true },
  { label: "YALI Programme" },
  { label: "California · 2016" },
  { label: "Kampala · Vestafi" },
  { label: "CNN Feature" },
];

export default async function Home() {
  const tiktokVideos = await getTikTokFeed();

  return (
    <main>
      <Nav />

      {/* 2. HERO */}
      <Hero />

      {/* 3. STORY */}
      <section className="section section--cream" id="story">
        <div className="container">
          <span className="section-index">01 — The Founder</span>
          <h2 className={styles.openingQuestion}>
            How many founders from East Africa can tell you the real work
            hasn&rsquo;t started yet?
          </h2>

          <div className={`grid-2 ${styles.storyGrid}`}>
            <div className={styles.storyCopy}>
              <p>
                Hakiza Ronald can. The story begins at Straight Talk Foundation
                in 2010, Uganda&rsquo;s leading youth development NGO, where he
                ran radio programs and community health campaigns across the
                country. Not passing through on the way to something else, but
                learning what it takes to reach people with something they
                actually need.
              </p>
              <p>
                In 2016 he founded Ugabus.com, the first platform to let East
                Africans book bus tickets online. It grew across borders and
                Treepz acquired it. He led their Uganda operations through the
                transition, and when that chapter ended he turned to face the
                next problem.
              </p>
              <p>
                Property. Not because it was a safe category to enter, but
                because the gap between East Africa&rsquo;s growing wealth and
                the market that should be moving it is one of the most
                structurally neglected problems on the continent. He decided it
                was worth the next decade.
              </p>
            </div>

            <div className={styles.storySide}>
              <blockquote className="blockquote">
                The U.S. Mission in Uganda named him Best Entrepreneur in 2022.
                He is a YALI Fellow. The Africa Entrepreneurship Award gave him
                $100,000 in Casablanca. These things happened because the work
                was consistent, not because anyone was lobbying for the
                attention.
              </blockquote>
              {/* Drop working photo into /public/images/working.jpg */}
              <Placeholder
                label="At work"
                alt="Hakiza Ronald at work building Vestafi in Kampala, Uganda"
                ratio="4 / 3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. VESTAFI */}
      <section className="section section--dark" id="vestafi">
        <span className={styles.watermark} aria-hidden="true">V</span>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <span className="section-index">02 — The Venture</span>
          <div className={`grid-2 ${styles.vestafiGrid}`}>
            <div>
              <h2 className={styles.vestafiHeading}>
                Here is the uncomfortable truth about property in East Africa.
              </h2>
              <p className="muted">
                There is no shortage of wealth. The middle class is growing and
                the appetite for ownership is real. What is missing is the
                infrastructure to move that wealth into property in a way that
                is transparent, accessible, and built for scale.
              </p>
              <p className="muted">
                Vestafi is a technology platform that solves this at the
                foundation. The model aggregates millions of Africans into both
                fractional and full property ownership, coordinating capital
                from individual investors across the continent. The platform
                handles acquisition, management, and the delivery of rental
                income back to members. Investors simply monitor their
                portfolios and watch value compound.
              </p>
              <p className="muted">
                This is how you reach scale quickly. Not by serving the few who
                already navigate the system, but by building the system the many
                have been waiting for.
              </p>

              <div className={styles.raising}>
                <span className={styles.pulse} aria-hidden="true" />
                Currently raising · SAFE round open
              </div>

              <div className={styles.vestafiActions}>
                <a href="#contact" className="btn btn--gold">Invest in Vestafi</a>
                <a
                  href="https://vestafi.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--gold-outline"
                >
                  Explore vestafi.co
                </a>
              </div>
            </div>

            <div className={styles.vestafiVisual}>
              {/* Drop Vestafi app screenshot into /public/images/vestafi-app.png */}
              <Placeholder
                label="Vestafi App"
                alt="The Vestafi platform — fractional and full property ownership for Africans"
                ratio="3 / 4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. JOURNEY */}
      <section className="section section--warm" id="journey">
        <div className="container">
          <span className="section-index">03 — The Journey</span>
          <p className={`lead ${styles.journeyHeader}`}>
            Fifteen years. No shortcuts.
          </p>

          <div className={`grid-2 ${styles.journeyGrid}`}>
            <ol className={styles.timeline}>
              {JOURNEY.map((item) => (
                <li key={item.when + item.org} className={styles.tlItem}>
                  <span className={styles.tlWhen}>{item.when}</span>
                  <div className={styles.tlBody}>
                    <span className={styles.tlRole}>{item.role}</span>
                    <span className={styles.tlOrg}>{item.org}</span>
                  </div>
                </li>
              ))}
            </ol>

            <div className={styles.journeyMedia}>
              <span className={styles.journeyMediaLabel}>In motion</span>
              <TikTokFeed
                videos={tiktokVideos}
                profile={TIKTOK_PROFILE}
                handle={TIKTOK_HANDLE}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. RECOGNITION */}
      <section className="section section--cream" id="recognition">
        <div className="container">
          <span className="section-index">04 — Recognition</span>
          <p className={`lead ${styles.recogHeader}`}>
            The recognition came because the work was consistent, not the other
            way around.
          </p>

          <div className={`grid-2 ${styles.recogGrid}`}>
            <div>
              <h3 className={styles.colTitle}>Awards</h3>
              <ul className={styles.awardList}>
                {AWARDS.map((a) => (
                  <li key={a.title}>
                    <span className={styles.awardTitle}>{a.title}</span>
                    <span className={styles.awardMeta}>{a.meta}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className={styles.colTitle}>Press</h3>
              <ul className={styles.pressList}>
                {PRESS.map((p) => (
                  <li key={p.name}>
                    <a href={p.href} target="_blank" rel="noopener noreferrer">
                      <span>{p.name}</span>
                      <span className={styles.arrow} aria-hidden="true">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LETTERS */}
      <section className="section section--warm" id="letters">
        <div className="container">
          <span className="section-index">05 — Letters</span>
          <div className={`grid-2 ${styles.lettersIntro}`}>
            <h2 className={styles.lettersHeading}>
              From the desk of Hakiza Ronald.
            </h2>
            <p className="muted">
              A monthly letter on building in East Africa — what the work
              actually looks like, what the market is telling me, and where the
              next decade is heading. No noise. Subscribe links coming soon.
            </p>
          </div>

          <div className={styles.letterGrid}>
            {LETTERS.map((l) => (
              // TODO: wire href to the real letter URL when published
              <a key={l.title} href="#" className={styles.letterCard}>
                <span className={styles.letterMeta}>{l.meta}</span>
                <span className={styles.letterTitle}>{l.title}</span>
                <span className={styles.letterRead}>Read →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 8. COMMUNITY */}
      <section className="section section--cream" id="community">
        <div className={`container ${styles.communityWrap}`}>
          <span className="section-index">06 — Community</span>
          <h2 className={styles.communityHeading}>
            I build companies. I also build the people around them.
          </h2>
          <p className={styles.communityBody}>
            The most durable thing a founder can build is the community around
            the company. Vestafi is the grandmaster, built on the belief that
            the right people with the right structure and information can own
            assets that create generational wealth. Beyond Vestafi, there is a
            community for founders and operators who want to stay sharp on AI.
            Because the model only works if the minds running it stay current.
          </p>
        </div>
      </section>

      {/* 9. GALLERY */}
      <section className="section section--warm" id="gallery">
        <div className="container">
          <span className="section-index">07 — In the Field</span>
          <div className={styles.gallery}>
            {GALLERY.map((g, i) => (
              <div
                key={g.label}
                className={`${styles.galleryItem} ${g.wide ? styles.galleryWide : ""}`}
              >
                {/* Drop gallery photo into /public/images/ and pass src */}
                <Placeholder
                  label={g.label}
                  alt={`Hakiza Ronald — ${g.label}`}
                  ratio={g.wide ? "16 / 9" : "1 / 1"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CLOSING CTA */}
      <section className="section section--dark" id="closing">
        <span className={`${styles.watermark} ${styles.watermarkHR}`} aria-hidden="true">HR</span>
        <div className={`container ${styles.closingWrap}`} style={{ position: "relative", zIndex: 2 }}>
          <h2 className={styles.closingHeading}>
            The question is not whether Vestafi is a good investment.
          </h2>
          <p className={styles.closingItalic}>
            It is whether you want to be in the room when East Africa finds out.
          </p>
          <p className={styles.closingSub}>
            Whether you are an investor, a collaborator, or someone who simply
            wants to follow the build, the conversation is open. For now.
          </p>
          <a href="#contact" className="btn btn--gold">Start a Conversation →</a>
        </div>
      </section>

      {/* 11. CONTACT */}
      <section className="section section--cream" id="contact">
        <div className="container">
          <span className="section-index">08 — Contact</span>
          <div className={`grid-2 ${styles.contactGrid}`}>
            <div>
              <h2 className={styles.contactHeading}>Start a conversation.</h2>
              <p className="muted">
                Investment, collaboration, or simply to follow the build — the
                fastest way to reach me is below. I read everything.
              </p>

              <ul className={styles.contactDetails}>
                <li>
                  <span className={styles.contactLabel}>Email</span>
                  <a href="mailto:hakiza@vestafi.africa">hakiza@vestafi.africa</a>
                </li>
                <li>
                  <span className={styles.contactLabel}>LinkedIn</span>
                  <a
                    href="https://www.linkedin.com/in/hakiza-ronald-40766892/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    /in/hakiza-ronald
                  </a>
                </li>
                <li>
                  <span className={styles.contactLabel}>Location</span>
                  <span>Ntinda, Kampala, Uganda</span>
                </li>
              </ul>

              <div className={styles.social}>
                <a
                  href="https://www.linkedin.com/in/hakiza-ronald-40766892/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
                <a
                  href="https://vestafi.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Vestafi"
                >
                  Vestafi
                </a>
                <a href="mailto:hakiza@vestafi.africa" aria-label="Email">Email</a>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className={`footer ${styles.footer}`}>
        <div className={`container ${styles.footerInner}`}>
          <a href="#top" className={styles.footerBrand}><Logo /></a>
          <p className={styles.footerCopy}>
            © 2026 Hakiza Ronald · Kampala, Uganda
          </p>
          <a
            href="https://vestafi.co"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            vestafi.co
          </a>
        </div>
      </footer>
    </main>
  );
}
