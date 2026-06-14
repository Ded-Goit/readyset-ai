import "./globals.css";

import { LanguageProvider } from "@/context/LanguageContext";

export const metadata = {
  title:
    "ReadySet.AI — AI Onboarding for Sales Teams",

  description:
    "AI onboarding platform for sales teams. Reduce ramp-up time by 50% and mentor load by 70%.",

  keywords: [
    "AI onboarding",
    "sales onboarding",
    "sales enablement",
    "training arena",
    "sales AI",
  ],

  openGraph: {
    title:
      "ReadySet.AI",

    description:
      "AI onboarding platform for sales teams",

    url: "https://readyset-ai.vercel.app/",

    siteName: "ReadySet.AI",

    locale: "en_US",

    type: "website",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${mono.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}