import type { Metadata } from "next";
import { Header } from "./Header/component";
import { Geist, Geist_Mono } from "next/font/google";
import thumbnail from "./Media/thumbnail.png"
import "./globals.css";
import { Footer } from "./Footer/component";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sunset Cliffs Webdesign",
  description: "San Diego based Webdesign",

  openGraph: {
    title: "Sunset Cliffs Webdesign",
    description: "San Diego based Webdesign",
    images: [
      {
        url: thumbnail.src, // important
        width: 1200,
        height: 630,
        alt: "Sunset Cliffs Webdesign",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
return (
  <html lang="en">
    <head>

    </head>

    <body className={`${geistSans.variable} ${geistMono.variable} antialiased ` }>
      <Header />
      {children}
      <Footer />
    </body>
  </html>
)
}
