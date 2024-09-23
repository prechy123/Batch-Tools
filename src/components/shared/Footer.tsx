"use client";

export default function Footer() {
  return (
    <div className="fixed h-7 w-full bottom-0 z-10 shadow-lg backdrop-blur-sm bg-black">
      <div className=" text-center pt-1">
        <p style={{fontSize: '75%',}}>
          Copyright © {new Date().getFullYear()} - All Rights Reserved -
          Bamidele and Dorbes.
        </p>
      </div>
    </div>
  );
}
