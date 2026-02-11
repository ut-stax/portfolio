import type { Metadata, Viewport } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/animations/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Utkarsh Tripathi | Developer Portfolio",
    template: "%s | Utkarsh Tripathi",
  },
  description:
    "B.Tech IT student specializing in Data Science. Building innovative solutions through web development and AI. Explore projects, skills, and achievements.",
  keywords: [
    "Utkarsh Tripathi",
    "developer",
    "portfolio",
    "web developer",
    "frontend",
    "react",
    "nextjs",
    "typescript",
    "data science",
    "machine learning",
    "AI",
    "full stack",
    "Gwalior",
    "India",
  ],
  authors: [{ name: "Utkarsh Tripathi", url: "https://utkarshtripathi.com" }],
  creator: "Utkarsh Tripathi",
  publisher: "Utkarsh Tripathi",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://utkarshtripathi.com",
    siteName: "Utkarsh Tripathi Portfolio",
    title: "Utkarsh Tripathi | Developer Portfolio",
    description:
      "B.Tech IT student specializing in Data Science. Building innovative solutions through web development and AI.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Utkarsh Tripathi Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@utkarshtripathi",
    creator: "@utkarshtripathi",
    title: "Utkarsh Tripathi | Developer Portfolio",
    description:
      "B.Tech IT student specializing in Data Science. Building innovative solutions through web development and AI.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "technology",
  classification: "Portfolio",
  other: {
    "og:email": "tripathikarsn79@gmail.com",
    "og:phone_number": "+91-6265655707",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://avatars.githubusercontent.com" />
        <link rel="preconnect" href="https://*.supabase.co" />
      </head>
      <body
        className={`${inter.variable} ${spaceMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
        >
          Skip to main content
        </a>

        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          <SmoothScroll>
            <Navbar />
            <main id="main-content" className="flex-1" tabIndex={-1}>
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
