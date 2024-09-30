import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/utils/Provider";
import Header from "@/components/shared/Header";
import ToastProvider from "../providers/ToastProvider";
import Footer from "@/components/shared/Footer";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Batch Tools",
  description:
    "Batch Tools offers free tools to simplify working with files. Convert document formats, remove backgrounds, generate QR codes, transcribe videos, merge PDFs, convert HTML to PDF, transform PDFs to JPG, convert JSON to CSV, and much more - all in one place!",
  keywords:
    "batch tools, Convert document format, background removal, qr code generator, video transcriber, pdf merger, html to pdf, pdf to jpg, json to csv",
  openGraph: {
    title: `Batch Tools`,
    description:
      "Batch Tools offers free tools to simplify working with files. Convert document formats, remove backgrounds, generate QR codes, transcribe videos, merge PDFs, convert HTML to PDF, transform PDFs to JPG, convert JSON to CSV, and much more - all in one place!",
    url: `https://batchtools.site/`,
    type: "website",
    images: [
      {
        url: "https://i.ibb.co/8dQRNWp/home.png",
        width: 1200,
        height: 630,
        alt: "Batch Tools Home Page",
      },
    ],
    locale: "en_US",
    siteName: "Batch Tools",
  },
  twitter: {
    card: "summary_large_image",
    title: `Batch Tools`,
    description:
      "Batch Tools offers free tools to simplify working with files. Convert document formats, remove backgrounds, generate QR codes, transcribe videos, merge PDFs, convert HTML to PDF, transform PDFs to JPG, convert JSON to CSV, and much more - all in one place!",
    images: ["https://i.ibb.co/8dQRNWp/home.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="kmng9R4sKTsDWcsL6EWJ2EVVMc0NA3V-3binVnt4K2I"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={` bg-[#ac8968] text-black dark:bg-[#3e362e] dark:text-white`}
        suppressHydrationWarning
      >
        <Provider>
          <Header />
          <SpeedInsights />
          <Analytics />
          <main
            style={{
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ToastProvider>{children}</ToastProvider>
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
