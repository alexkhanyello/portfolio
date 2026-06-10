import "@/app/globals.css"
import { clsx } from "clsx";
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navbar";
import { PageWrapper } from "@/components/page-wrapper";
import { Providers } from "@/app/providers";
import { StarsBackground } from "@/components/backgrounds/stars";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cv.alexkhan.site"),

  title: {
    default: "Alexander Khan | Project Manager",
    template: "%s | Alexander Khan",
  },

  description:
    "Project Manager specializing in e-commerce, Agile delivery, stakeholder management, backlog prioritization, and digital product development.",

  keywords: [
    "Alexander Khan",
    "Alex Khan",
    "Александр Хан",
    "Project Manager",
    "IT Project Manager",
    "E-commerce Project Manager",
    "Digital Project Manager",
    "Product Manager",
    "Agile",
    "Scrum",
    "Jira",
    "Confluence",
    "Digital Products",
    "E-commerce",
    "Almaty",
    "Kazakhstan",
    "ZETA",
  ],

  openGraph: {
    title: "Alexander Khan | Project Manager",
    description:
      "Project Manager specializing in e-commerce, Agile delivery, stakeholder management, backlog prioritization, and digital product development.",
    siteName: "Alexander Khan",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Alexander Khan | Project Manager",
    description:
      "Project Manager specializing in e-commerce, Agile delivery and digital products.",
    images: ["/og-image.png"],
  },

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
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const content = (
    <main className="bg-background min-h-screen bg-gradient-to-b from-background to-content2">
      <Navigation />
      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </main>
  );

  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "dark",
          }}
        >
            <StarsBackground>{content}</StarsBackground>
            <Analytics />
        </Providers>
      </body>
    </html>
  );
}
