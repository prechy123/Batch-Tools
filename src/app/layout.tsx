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
        url: "/public/png/12345.png",
        width: 800,
        height: 600,
        alt: "Batch Tools Home Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Batch Tools`,
    description:
      "Batch Tools offers free tools to simplify working with files. Convert document formats, remove backgrounds, generate QR codes, transcribe videos, merge PDFs, convert HTML to PDF, transform PDFs to JPG, convert JSON to CSV, and much more - all in one place!",
    images: ["/public/png/12345.png"],
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
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
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
