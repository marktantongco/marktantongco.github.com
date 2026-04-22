import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

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
    "The faith-driven framework for Filipino advisors who own results, lead stronger teams, and sell with integrity. By Mark Anthony Ng Tantongco.",
  keywords: [
    "accountability",
    "sales playbook",
    "faith-driven",
    "MDRT",
    "Filipino advisors",
    "ownership",
    "sales framework",
  ],
  authors: [{ name: "Mark Anthony Ng Tantongco" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "100% Accountability Sales Playbook",
    description: "Own Outcomes, Not Excuses. The faith-driven framework for advisors.",
    type: "website",
    images: [{ url: '/cover-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '100% Accountability Sales Playbook',
    description: 'Own Outcomes, Not Excuses. The faith-driven framework for advisors.',
    images: ['/cover-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
