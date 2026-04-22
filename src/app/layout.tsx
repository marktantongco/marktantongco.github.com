import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { JsonLd } from "@/components/landing/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://marktantongco.github.com'),
  title: "100% Accountability Sales Playbook | Own Outcomes, Not Excuses",
  description:
    "The faith-driven framework for Filipino advisors who own results, lead stronger teams, and sell with integrity. 3 pillars, word-for-word scripts, weekly reset routine, and 4 bonus resources. By Mark Anthony Ng Tantongco.",
  keywords: [
    "accountability",
    "sales playbook",
    "faith-driven sales",
    "MDRT",
    "Filipino advisors",
    "ownership mindset",
    "sales framework",
    "accountability playbook",
    "faith-driven professional",
    "sales scripts",
    "weekly reset routine",
    "team accountability",
    "ownership scripts",
    "Philippians 4:13",
  ],
  authors: [{ name: "Mark Anthony Ng Tantongco", url: "https://marktantongco.github.com" }],
  creator: "Mark Anthony Ng Tantongco",
  publisher: "100% Accountability",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.svg",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://marktantongco.github.com",
  },
  openGraph: {
    title: "100% Accountability Sales Playbook | Own Outcomes, Not Excuses",
    description: "The faith-driven framework for Filipino advisors. 3 pillars, ownership scripts, weekly reset routine, and 4 bonus resources.",
    type: "website",
    url: "https://marktantongco.github.com",
    siteName: "100% Accountability Sales Playbook",
    locale: "en_US",
    images: [
      {
        url: "/cover-image.png",
        width: 1200,
        height: 630,
        alt: "100% Accountability Sales Playbook - Own Outcomes, Not Excuses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "100% Accountability Sales Playbook | Own Outcomes, Not Excuses",
    description: "The faith-driven framework for Filipino advisors. 3 pillars, ownership scripts, weekly reset, and 4 bonus resources.",
    images: [
      {
        url: "/cover-image.png",
        alt: "100% Accountability Sales Playbook",
      },
    ],
    creator: "@100accountability",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#c9a84c" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="100% Accountability" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <JsonLd />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
