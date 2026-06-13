import "./globals.css";

import { LanguageProvider } from "@/context/LanguageContext";

export const metadata = {
  title: "ReadySet.AI",
  description: "AI onboarding for sales teams",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
