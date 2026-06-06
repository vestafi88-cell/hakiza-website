"use client";

import styles from "./TikTokFeed.module.css";

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path d="M8 5v14l11-7z" fill="currentColor" />
    </svg>
  );
}

function TikTokGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true">
      <path
        d="M16.5 3c.3 2.1 1.6 3.7 3.7 4v2.4c-1.3.1-2.6-.3-3.7-1v5.7a5.3 5.3 0 1 1-5.3-5.3c.3 0 .5 0 .8.1v2.5a2.8 2.8 0 1 0 2 2.7V3h2.5z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Premium "latest videos" phone feed for the Journey section.
 * `videos` is the pre-fetched oEmbed data from getTikTokFeed() (server).
 * Renders a graceful placeholder when there are no videos.
 */
export default function TikTokFeed({ videos = [], profile = "", handle = "" }) {
  const hasVideos = Array.isArray(videos) && videos.length > 0;

  return (
    <div className={styles.wrap}>
      <div className={styles.phone}>
        <span className={styles.notch} aria-hidden="true" />
        <div className={styles.screen}>
          <header className={styles.head}>
            <span className={styles.avatar} aria-hidden="true">
              <TikTokGlyph />
            </span>
            <span className={styles.headText}>
              <span className={styles.handle}>@{handle || "tiktok"}</span>
              <span className={styles.headLabel}>Latest from TikTok</span>
            </span>
          </header>

          {hasVideos ? (
            <ul className={styles.feed}>
              {videos.map((v, i) => (
                <li key={v.url + i} className={styles.card}>
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardLink}
                    aria-label={v.title || "Watch on TikTok"}
                  >
                    <span className={styles.thumb}>
                      {v.ok && v.thumbnail ? (
                        // Plain <img> (not next/image) is intentional: TikTok CDN
                        // thumbnails aren't an allow-listed remote domain and may
                        // block hotlinking — a failure here just reveals the
                        // gradient behind it, so the page can never break.
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={v.thumbnail}
                          alt={v.title || "TikTok video thumbnail"}
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      ) : null}
                      <span className={styles.play}>
                        <PlayGlyph />
                      </span>
                    </span>
                    {v.title ? (
                      <span className={styles.caption}>{v.title}</span>
                    ) : (
                      <span className={styles.caption}>Watch on TikTok →</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.placeholder}>
              <span className={styles.placeholderIcon} aria-hidden="true">
                <TikTokGlyph />
              </span>
              <p className={styles.placeholderTitle}>Latest videos coming soon.</p>
              <p className={styles.placeholderSub}>
                The build, in motion — straight from the field.
              </p>
            </div>
          )}

          <a
            href={profile || "https://www.tiktok.com/@hakizalive"}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.follow}
          >
            Watch more on TikTok
          </a>
        </div>
      </div>
    </div>
  );
}
