"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <div className="fixed h-7 w-full bottom-0 z-10 shadow-lg backdrop-blur-sm bg-black">
      <div className=" text-center pt-1">
        <p style={{ fontSize: "75%" }} className=" text-white">
          Copyright © {new Date().getFullYear()} - All Rights Reserved -
          <Link
            href="https://www.bamidele.site/"
            target="_blank"
            className=" underline"
          >
            Bamidele
          </Link>{" "}
          and <Link href="/" className="underline">Dorbes</Link>.
        </p>
      </div>
    </div>
  );
}
