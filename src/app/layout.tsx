import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://anushka-potdar.vercel.app'),
  title: "Anushka Potdar | AI/ML Engineer Portfolio",
  description:
    "Explore Anushka Potdar's portfolio showcasing Artificial Intelligence, Machine Learning projects, technical skills, achievements and innovative solutions.",
  keywords: [
    "Anushka Potdar",
    "Anushka Amol Potdar",
    "AI/ML Engineer",
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Generative AI",
    "KrishiMitra AI",
    "CyberShieldAI",
    "Engineering Student",
    "Dr. D. Y. Patil College of Engineering and Technology",
    "Portfolio",
  ],
  authors: [{ name: "Anushka Potdar" }],
  creator: "Anushka Potdar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anushka-potdar.vercel.app",
    title: "Anushka Potdar | AI/ML Engineer Portfolio",
    description:
      "Explore Anushka Potdar's portfolio showcasing Artificial Intelligence, Machine Learning projects, technical skills, achievements and innovative solutions.",
    siteName: "Anushka Potdar Portfolio",
    images: [
      {
        url: "/images/anushka.jpg",
        width: 1200,
        height: 1600,
        alt: "Anushka Potdar - Aspiring AI/ML Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anushka Potdar | AI/ML Engineer Portfolio",
    description:
      "Explore Anushka Potdar's portfolio showcasing Artificial Intelligence, Machine Learning projects, technical skills, achievements and innovative solutions.",
    images: ["/images/anushka.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-white text-[#14213D] min-h-screen selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
