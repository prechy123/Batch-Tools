"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const paths = [
  { link: "/", pathname: "HOME" },
  { link: "/about", pathname: "ABOUT" },
];

export default function Header() {
  const { setTheme } = useTheme();
  const [themeDropDown, setThemeDropdown] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <nav className="sticky z-10 shadow-lg backdrop-blur-sm">
      <div className=" flex justify-between items-center h-[70px] px-10">
        <div>
          <h1 className=" font-extrabold text-2xl">Dirchy</h1>
        </div>
        <div className="flex gap-12 bg-slate-600/25 backdrop-blur-lg rounded p-3 ">
          {paths.map((path) => {
            const isActive = path.link === pathname ? true : false;
            const navMenuClass = isActive
              ? "border-b-2 pb-0 border-b-[#865d36] text-white dark:text-black rounded"
              : "";
            return (
              <Link
                className={`${navMenuClass}  p-1`}
                href={path.link}
                key={path.link}
              >
                <div className="nav-menu">{path.pathname}</div>
              </Link>
            );
          })}
        </div>
        <div className="relative">
          <p
            onClick={() => setThemeDropdown((prev) => !prev)}
            className=" cursor-pointer"
          >
            Theme
          </p>
          {themeDropDown && (
            <div className="absolute top-10 right-10 bg-[#93785b] text-white dark:text-black p-2 rounded px-4 shadow-lg">
              <p
                onClick={() => {
                  setTheme("light");
                  setThemeDropdown(false);
                }}
                className=" cursor-pointer mb-1"
              >
                Light
              </p>
              <p
                onClick={() => {
                  setTheme("dark");
                  setThemeDropdown(false);
                }}
                className=" cursor-pointer"
              >
                Dark
              </p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
