import type React from "react";
import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import AEFav from "@/public/icon/favicon.ico";
import AEFav16 from "@/public/icon/favicon-16x16.png";
import AEFav32 from "@/public/icon/favicon-32x32.png";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Adham ElGazoly | Full Stack Developer & Software Engineer",
  description:
    "Portfolio of Adham ElGazoly, a passionate full stack developer with 4+ years of experience building scalable web applications, React/Next.js expertise, and modern JavaScript solutions.",
  keywords: [
    "Adham ElGazoly",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Cairo Developer",
    "Egypt Developer",
  ],
  authors: [{ name: "Adham ElGazoly" }],
  creator: "Adham ElGazoly",
  publisher: "Adham ElGazoly",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.adhamelgazoly.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Adham ElGazoly | Full Stack Developer & Software Engineer",
    description:
      "Portfolio of Adham ElGazoly, a passionate full stack developer with 3+ years of experience building scalable web applications, React/Next.js expertise, and modern JavaScript solutions.",
    url: "https://www.adhamelgazoly.com/",
    siteName: "Adham ElGazoly Portfolio",
    images: [
      {
        url: "https://www.adhamelgazoly.com/cover.jpg",
        width: 1200,
        height: 630,
        alt: "Adham ElGazoly - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US", // underscore for OG/WhatsApp
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adham ElGazoly | Full Stack Developer & Software Engineer",
    description:
      "Portfolio of Adham ElGazoly, a passionate full stack developer with 4+ years of experience building scalable web applications, React/Next.js expertise, and modern JavaScript solutions.",
    images: ["https://www.adhamelgazoly.com/cover.jpg"],
    creator: "@elgazoly_m",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: AEFav16.src, sizes: "16x16", type: "image/png" },
      { url: AEFav32.src, sizes: "32x32", type: "image/png" },
    ],
    shortcut: AEFav.src,
    apple: [
      {
        url: AEFav32.src,
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "icon",
        url: AEFav.src,
        type: "image/x-icon",
      },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {},
  category: "technology",
  classification: "Portfolio",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#10b981" },
    { media: "(prefers-color-scheme: dark)", color: "#10b981" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable}`}
      style={{ scrollBehavior: "smooth", overflowX: "hidden" }}
    >
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon fallback */}
        <link rel="icon" type="image/x-icon" href="/icon/favicon.ico" />

        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* --- Explicit OG/Twitter tags for WhatsApp --- */}
        <meta
          property="og:title"
          content="Adham ElGazoly | Full Stack Developer & Software Engineer"
        />
        <meta
          property="og:description"
          content="Portfolio of Adham ElGazoly, a passionate full stack developer with 4+ years of experience building scalable web applications, React/Next.js expertise, and modern JavaScript solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.adhamelgazoly.com/" />
        <meta property="og:site_name" content="Adham ElGazoly Portfolio" />
        <meta property="og:locale" content="en_US" />

        {/* Image – JPEG, absolute HTTPS */}
        <meta
          property="og:image"
          content="https://www.adhamelgazoly.com/cover.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.adhamelgazoly.com/cover.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Adham ElGazoly - Full Stack Developer Portfolio"
        />
        <meta property="og:image:type" content="image/jpeg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Adham ElGazoly | Full Stack Developer & Software Engineer"
        />
        <meta
          name="twitter:description"
          content="Portfolio of Adham ElGazoly, a passionate full stack developer with 4+ years of experience building scalable web applications, React/Next.js expertise, and modern JavaScript solutions."
        />
        <meta
          name="twitter:image"
          content="https://www.adhamelgazoly.com/cover.jpg"
        />
        <meta name="twitter:creator" content="@elgazoly_m" />

        {/* PWA/Apple */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Adham ElGazoly" />

        {/* Additional SEO meta */}
        <meta name="geo.region" content="EG-C" />
        <meta name="geo.placename" content="Cairo" />
        <meta name="geo.position" content="30.0444;31.2357" />
        <meta name="ICBM" content="30.0444, 31.2357" />

        {/* Language alternative */}
        <link
          rel="alternate"
          hrefLang="en"
          href="https://www.adhamelgazoly.com/"
        />

        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          // Keep in sync with OG/twitter above
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Adham ElGazoly",
              url: "https://www.adhamelgazoly.com/",
              jobTitle: "Full Stack Developer",
              description:
                "Full Stack Developer with 4+ years of experience in modern web technologies",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cairo",
                addressCountry: "Egypt",
              },
              email: "elgazoly11@gmail.com",
              sameAs: [
                "https://github.com/EL-Gazoly",
                "https://www.linkedin.com/in/adham-elgazoly-075385190/",
              ],
              knowsAbout: [
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Full Stack Development",
                "Web Development",
              ],
              image: "https://www.adhamelgazoly.com/cover.jpg",
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
