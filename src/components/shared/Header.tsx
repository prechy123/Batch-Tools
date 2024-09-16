"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import * as motion from "framer-motion/client";
import Image from "next/image";
import sun_and_moon from "./sun_and_moon.png";

const paths = [
  { link: "/", pathname: "HOME" },
  { link: "/about", pathname: "ABOUT" },
];

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: 20, rotate: 30 },
  visible: { opacity: 1, x: 0, rotate: 0 },
};

export default function Header() {
  const { setTheme } = useTheme();
  const [themeDropDown, setThemeDropdown] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <nav className="sticky top-0 z-10 shadow-lg backdrop-blur-sm">
      <div className=" flex justify-between items-center h-[70px] px-5 sm:px-10">
        <div>
          <h1 className=" font-extrabold text-2xl">Dirchy</h1>
        </div>
        <div className="flex gap-6 sm:gap-12 bg-slate-600/25 backdrop-blur-lg rounded p-3 ">
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
        <div
          className="relative"
          onMouseEnter={() => setThemeDropdown(true)}
          onMouseLeave={() => setThemeDropdown(false)}
        >
          <p className=" cursor-pointer">
            <Image src={sun_and_moon} width={64} height={64} alt="theme" />
          </p>
          {themeDropDown && (
            <motion.div
              className="absolute top-10 right-10 bg-[#93785b] text-white dark:text-black p-2 rounded px-4 shadow-lg"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.p
                onClick={() => {
                  setTheme("light");
                  setThemeDropdown(false);
                }}
                className=" cursor-pointer mb-1"
                variants={childVariants}
              >
                Light
              </motion.p>
              <motion.p
                onClick={() => {
                  setTheme("dark");
                  setThemeDropdown(false);
                }}
                className=" cursor-pointer"
                variants={childVariants}
              >
                Dark
              </motion.p>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
}
