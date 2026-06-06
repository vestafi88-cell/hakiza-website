export default function manifest() {
  return {
    name: "Hakiza Ronald — Founder of Vestafi",
    short_name: "Hakiza Ronald",
    description:
      "Ugandan entrepreneur and founder of Vestafi, building Africa's path to property ownership at scale.",
    start_url: "/",
    display: "standalone",
    background_color: "#FDFAF5",
    theme_color: "#07090F",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
