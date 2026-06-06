// ─────────────────────────────────────────────────────────────────────────
//  TIKTOK FEED CONFIG  —  THIS IS THE ONLY FILE YOU EDIT TO ADD VIDEOS
// ─────────────────────────────────────────────────────────────────────────
//
//  HOW TO ADD / REPLACE VIDEOS:
//    1. Open any of your public TikTok videos in a browser.
//    2. Copy the full URL from the address bar. It looks like:
//         https://www.tiktok.com/@yourhandle/video/7325000000000000000
//    3. Paste each URL as a string into TIKTOK_VIDEOS below, NEWEST FIRST.
//    4. Save. The site rebuilds the feed automatically (re-deploy to publish).
//
//  Leave the array empty and the site shows a polished "coming soon"
//  placeholder instead — it never breaks.
//
//  Metadata (thumbnail, caption) is pulled from TikTok's official public
//  oEmbed endpoint — no API key, no scraping. If a single URL fails to load,
//  that card degrades gracefully to a tap-to-open link; the page is unaffected.
// ─────────────────────────────────────────────────────────────────────────

/** Your public TikTok profile (used for the "Watch more" button + header). */
export const TIKTOK_PROFILE = "https://www.tiktok.com/@hakizalive";

/** Your @handle shown in the phone header (no leading @). */
export const TIKTOK_HANDLE = "hakizalive";

/**
 * Paste full TikTok video URLs here — NEWEST FIRST.
 * Get a URL by opening a video on tiktok.com and copying the address bar, e.g.
 *   https://www.tiktok.com/@hakizalive/video/7325000000000000000
 * Leave empty and the card shows the "coming soon" placeholder.
 */
export const TIKTOK_VIDEOS = [
  // "https://www.tiktok.com/@hakizalive/video/7325000000000000000",
  // "https://www.tiktok.com/@hakizalive/video/7320000000000000000",
];

const OEMBED = "https://www.tiktok.com/oembed";

/**
 * Fetches public oEmbed metadata for each configured video.
 * Runs server-side; cached for 24h via ISR. Always resolves — never throws —
 * so a network hiccup can never break the page render.
 */
export async function getTikTokFeed() {
  if (!Array.isArray(TIKTOK_VIDEOS) || TIKTOK_VIDEOS.length === 0) return [];

  const items = await Promise.all(
    TIKTOK_VIDEOS.map(async (url) => {
      try {
        const res = await fetch(`${OEMBED}?url=${encodeURIComponent(url)}`, {
          next: { revalidate: 86400 },
        });
        if (!res.ok) return { url, ok: false };
        const data = await res.json();
        return {
          url,
          ok: true,
          title: data.title || "",
          author: data.author_name || "",
          thumbnail: data.thumbnail_url || "",
        };
      } catch {
        return { url, ok: false };
      }
    })
  );

  return items;
}
