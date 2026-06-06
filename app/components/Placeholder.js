import Image from "next/image";

/**
 * Image placeholder. Shows a styled fill + uppercase caption until a real
 * photo is dropped in.
 *
 * TO ADD A REAL PHOTO:
 *   1. Drop the file into /public/images/  (e.g. casablanca-2018.jpg)
 *   2. Pass its path as `src`, e.g. <Placeholder src="/images/casablanca-2018.jpg" ... />
 *   The styled fill is replaced automatically by the <Image> below.
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
    <div
      className={`placeholder ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {src && (
        <Image
          className="placeholder__img"
          src={src}
          alt={alt || label}
          fill
          sizes="(max-width: 860px) 100vw, 50vw"
          priority={priority}
        />
      )}
      <span className="placeholder__label">{label}</span>
    </div>
  );
}
