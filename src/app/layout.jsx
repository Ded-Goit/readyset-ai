import "./globals.css";

import { LanguageProvider } from "@/context/LanguageContext";

export const metadata = {
  metadataBase: new URL(
    "https://readyset-ai.vercel.app"
  ),

  title: {
    default:
      "ReadySet.AI — AI Sales Onboarding Platform",

    template:
      "%s | ReadySet.AI",
  },

  description:
    "ReadySet.AI helps sales teams onboard faster with AI-powered onboarding plans, training simulations, company knowledge search, and mentor insights. Reduce ramp-up time by 50% and mentor workload by 70%.",

  keywords: [
    "AI onboarding",
    "sales onboarding",
    "sales enablement",
    "sales training",
    "sales coaching",
    "AI sales assistant",
    "employee onboarding",
    "sales productivity",
    "sales readiness",
    "sales training software",
    "sales onboarding platform",
    "revenue enablement",
    "B2B sales onboarding",
    "sales onboarding AI",
    "training arena",
    "AI mentor",
    "knowledge management",
    "sales performance",
    "AI learning platform",
  ],

  authors: [
    {
      name: "ReadySet.AI",
    },
  ],

  creator: "ReadySet.AI",

  publisher: "ReadySet.AI",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview":
        "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },

  openGraph: {
    type: "website",

    locale: "en_US",

    url:
      "https://readyset-ai.vercel.app",

    siteName:
      "ReadySet.AI",

    title:
      "ReadySet.AI — AI Sales Onboarding Platform",

    description:
      "Reduce onboarding time by 50%, mentor workload by 70%, and help new sales reps become productive faster with AI.",

    images: [
      {
        url: "/og-image.png",

        width: 1200,

        height: 630,

        alt: "ReadySet.AI",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "ReadySet.AI — AI Sales Onboarding Platform",

    description:
      "AI-powered onboarding for modern sales teams.",

    images: [
      "/og-image.png",
    ],
  },
};

import {
  Sora,
  JetBrains_Mono,
} from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const structuredData = {
  "@context":
    "https://schema.org",

  "@type":
    "SoftwareApplication",

  name:
    "ReadySet.AI",

  applicationCategory:
    "BusinessApplication",

  operatingSystem:
    "Web",

  url:
    "https://readyset-ai.vercel.app",

  description:
    "AI-powered onboarding platform for sales teams with personalized onboarding plans, sales simulations, company knowledge search, and mentor insights.",

  offers: {
    "@type":
      "Offer",

    price: "0",

    priceCurrency:
      "USD",
  },

  featureList: [
    "AI onboarding plans",
    "Sales training simulations",
    "Knowledge assistant",
    "Mentor insights",
    "Risk detection",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${mono.variable}`}>
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(
      structuredData
    ),
  }}
/>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}