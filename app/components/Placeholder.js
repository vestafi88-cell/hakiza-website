import Image from "next/image";

function FrameIcon() {
  // Elegant line-art "viewfinder" mark shown while no photo is set.
  return (
    <svg
      viewBox="0 0 48 48"
      width="46"
      height="46"
      aria-hidden="true"
      className="placeholder__icon"
    >
      <rect
        x="6"
        y="11"
        width="36"
        height="28"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M16 11l3-4h10l3 4" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="24" cy="26" r="7.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="24" cy="26" r="2" fill="currentColor" />
    </svg>
  );
}

/**
 * Image placeholder. Shows a refined framed graphic + caption until a real
 * photo is dropped in — so the page looks finished before any upload.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * TO ADD A REAL PHOTO:
 *   1. Drop the file into  /public/images/   (e.g. casablanca-2018.jpg)
 *   2. Pass its path as `src`:
 *        <Placeholder src="/images/casablanca-2018.jpg" label="…" alt="…" />
 *   The framed graphic is replaced automatically by an optimized <Image>.
 * ─────────────────────────────────────────────────────────────────────────
 */
export default function Placeholder({
  label,
  alt,
  src = null,
  ratio = "3 / 4",
  className = "",
  priority = false,
}) {
  return (
    <div className={`placeholder ${className}`} style={{ aspectRatio: ratio }}>
      {src ? (
        <Image
          className="placeholder__img"
          src={src}
          alt={alt || label}
          fill
          sizes="(max-width: 860px) 100vw, 50vw"
          priority={priority}
        />
      ) : (
        <div className="placeholder__inner" role="img" aria-label={alt || label}>
          <span className="placeholder__frame" aria-hidden="true" />
          <span className="placeholder__eyebrow">Photo</span>
          <FrameIcon />
          <span className="placeholder__label">{label}</span>
        </div>
      )}
    </div>
  );
}
