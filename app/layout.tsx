import "./globals.css";
import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
});

const siteName = "YUNUS NALCI";
const siteUrl = "https://yunusnalci.com";
const title = "Yunus Nalci — Brand & Product Designer";
const description =
  "Brand and product designer focused on building scalable digital experiences, high-performing brands, and strategic design systems from concept to execution.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: siteName,
  authors: [{ name: "Yunus Nalcı", url: siteUrl }],
  creator: "Yunus Nalcı",
  publisher: "Yunus Nalcı",
  alternates: { canonical: "/" },

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

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title,
    description,
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yunus Nalcı — Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={interTight.variable}>
      <body suppressHydrationWarning>
        {children}
        <GoogleAnalytics gaId="G-BQGKXTSLZX" />
      </body>
    </html>
  );
}