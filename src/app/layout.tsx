import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://caspian-ubook.vercel.app"),
  title: "Caspian UBook — Investor & Developer Roadmap",
  description: "Investor landing and developer specification for Caspian UBook — Azerbaijan travel concierge platform.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Caspian UBook — Azerbaijan Travel Concierge",
    description: "Azerbaijan travel concierge platform: MVP roadmap, investor memo and developer specification.",
    url: "/",
    siteName: "Caspian UBook",
    images: ["/assets/hero-bg.png"],
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
