import { Cormorant_Garamond, Jost, Pinyon_Script } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const SITE_URL = "https://hakizaronald.com";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pinyon",
  display: "swap",
});

const TITLE = "Hakiza Ronald — Founder of Vestafi | African Entrepreneur";
const DESCRIPTION =
  "Hakiza Ronald is a Ugandan entrepreneur, YALI Fellow, and founder of Vestafi — the platform moving Africa's growing wealth into property ownership at scale. Founder of Ugabus (acquired by Treepz), Africa Entrepreneurship Award winner, and builder at the intersection of startups, AI, and East African real estate.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Hakiza Ronald",
  },
  description: DESCRIPTION,
  applicationName: "Hakiza Ronald",
  authors: [{ name: "Hakiza Ronald", url: SITE_URL }],
  creator: "Hakiza Ronald",
  publisher: "Hakiza Ronald",
  keywords: [
    "Hakiza Ronald",
    "Vestafi",
    "Vestafi founder",
    "Ugabus founder",
    "Ugabus.com",
    "Treepz acquisition",
    "African entrepreneur",
    "Uganda founder",
    "East Africa startup",
    "YALI Fellow",
    "Africa Entrepreneurship Award",
    "property ownership Africa",
    "fractional real estate Africa",
    "AI",
    "startup building",
    "Kampala entrepreneur",
    "generational wealth Africa",
  ],
  alternates: {
    canonical: "/",
  },
  category: "business",
  openGraph: {
    type: "profile",
    siteName: "Hakiza Ronald",
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
    firstName: "Hakiza",
    lastName: "Ronald",
    username: "hakizaronald",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport = {
  themeColor: "#FDFAF5",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Hakiza Ronald",
      description: DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Hakiza Ronald",
      url: SITE_URL,
      jobTitle: "Founder & CEO, Vestafi",
      gender: "Male",
      nationality: "Ugandan",
      description:
        "Ugandan entrepreneur and founder of Vestafi. Founder of Ugabus.com (acquired by Treepz), YALI Fellow, and Africa Entrepreneurship Award winner.",
      email: "mailto:hakiza@vestafi.africa",
      homeLocation: {
        "@type": "Place",
        name: "Kampala, Uganda",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ntinda, Kampala",
          addressCountry: "UG",
        },
      },
      worksFor: { "@id": `${SITE_URL}/#vestafi` },
      sameAs: [
        "https://www.linkedin.com/in/hakiza-ronald-40766892/",
        "https://vestafi.co",
      ],
      knowsAbout: [
        "Entrepreneurship",
        "Property technology",
        "Fractional real estate ownership",
        "Artificial intelligence",
        "Startup building",
        "East African markets",
      ],
      award: [
        "Africa Entrepreneurship Award — Casablanca 2018 ($100,000)",
        "U.S. Mission Uganda Best Entrepreneur 2022",
        "YALI Fellow",
      ],
      alumniOf: "Young African Leaders Initiative (YALI)",
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#vestafi`,
      name: "Vestafi",
      url: "https://vestafi.co",
      description:
        "Technology platform aggregating millions of Africans into fractional and full property ownership, coordinating capital and delivering rental income to members.",
      founder: { "@id": `${SITE_URL}/#person` },
      foundingLocation: {
        "@type": "Place",
        name: "Kampala, Uganda",
      },
      industry: "PropTech / Real Estate Technology",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} ${pinyon.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
