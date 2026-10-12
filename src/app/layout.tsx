import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anushka Potdar | Aspiring AI/ML Engineer",
  description:
    "Explore Anushka Potdar's portfolio, technical skills, AI learning journey, and software projects.",
  keywords: [
    "Anushka Potdar",
    "AI/ML Engineer",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Structures",
    "Deep Learning",
    "Generative AI",
    "Agentic AI",
    "Engineering Student",
    "Portfolio",
    "Dr. D. Y. Patil College of Engineering and Technology",
    "Realtime Connect",
    "KrishiMitra AI",
  ],
  authors: [{ name: "Anushka Potdar" }],
  creator: "Anushka Potdar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anushka-potdar.vercel.app",
    title: "Anushka Potdar | Aspiring AI/ML Engineer",
    description:
      "Explore Anushka Potdar's portfolio, technical skills, AI learning journey, and software projects.",
    siteName: "Anushka Potdar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anushka Potdar | Aspiring AI/ML Engineer",
    description:
      "Explore Anushka Potdar's portfolio, technical skills, AI learning journey, and software projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-[#030712] text-slate-100 min-h-screen selection:bg-purple-500/30 selection:text-purple-200`}
      >
        {children}
      </body>
    </html>
  );
}
