import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Aurora from "@/components/backgrounds/Aurora";
import DustMotes from "@/components/backgrounds/DustMotes";
import MagneticGrid from "@/components/backgrounds/MagneticGrid";
import Nav from "@/components/Nav";
import ScrollTop from "@/components/ScrollTop";

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jbmono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Yatindran Sathishkumar | Software Engineer",
    template: "Yatindran Sathishkumar | %s",
  },
  description:
    "Full-stack Software Development Engineer based in Sydney, open to roles Australia-wide. Junior–mid roles in software, data engineering & AI.",
  openGraph: {
    title: "Yatindran Sathishkumar | Software Engineer",
    description:
      "Full-stack Software Development Engineer based in Sydney, open to roles Australia-wide.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0f0d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${space.variable} ${inter.variable} ${jbmono.variable} antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.theme==='light')document.documentElement.classList.add('light')}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-screen font-body">
        <Aurora />
        <MagneticGrid />
        <DustMotes />
        <div className="grain" aria-hidden="true" />
        <Nav />
        {children}
        <ScrollTop />
      </body>
    </html>
  );
}
