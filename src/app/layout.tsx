import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/utils/Provider";
import Header from "@/components/shared/Header";
import ToastProvider from "../providers/ToastProvider";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Batch Tools",
  description:
    "An All-In-One application to perform various operation to your various file formats",
  keywords:
    "file converter, image resizer, video downloader, background remover, all-in-one app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon.png"
        />
      </head>
      <body
        className={` bg-[#ac8968] text-black dark:bg-[#3e362e] dark:text-white`}
        suppressHydrationWarning
      >
        <Provider>
          <Header />
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
