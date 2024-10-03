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
  const { setTheme, theme } = useTheme();
  const [themeDropDown, setThemeDropdown] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <nav className="sticky top-0 z-10 shadow-lg backdrop-blur-sm">
      <div className=" flex justify-between items-center h-[70px] px-5 sm:px-10">
        <Link href={"/"}>
          <svg
            fill={theme == "dark" ? "#ffffff" : "#000000"}
            width="40px"
            height="40px"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.25 10.71 11.57 8l2.26-2.26a2.49 2.49 0 0 0 0-3.53 2.5 2.5 0 0 0-3.53 0l-.89.88L8 4.5 5.28 1.75a1.26 1.26 0 0 0-1.76 0L1.75 3.52a1.25 1.25 0 0 0 0 1.77L4.5 8l-.22.22-.89.88-1.75 3.66a1.25 1.25 0 0 0 1.67 1.67l3.62-1.75.49-.49.39-.39.19-.23 2.68 2.68a1.26 1.26 0 0 0 1.76 0l1.77-1.77a1.25 1.25 0 0 0 .04-1.77zm-2.19-8a1.27 1.27 0 0 1 .89.36 1.25 1.25 0 0 1 0 1.77l-1.77-1.72a1.27 1.27 0 0 1 .88-.36zM2.63 4.4 4.4 2.64l.82.82-.87.88.88.88.88-.88 1 1-1.73 1.81zm.13 8.91 1.57-3.23L6 11.74zm4.17-2.4L5.16 9.14 10.3 4l1.76 1.76zm4.67 2.45-2.68-2.67 1.77-1.77.93.93-.88.88.88.89.89-.89.86.87z" />
          </svg>
        </Link>
        <div className="flex gap-4 sm:gap-12 bg-slate-600/25 backdrop-blur-lg rounded p-3 ">
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
                <h3 className=" text-lg">{path.pathname}</h3>
              </Link>
            );
          })}
        </div>
        <div
          className="relative"
          onMouseEnter={() => setThemeDropdown(true)}
          onMouseLeave={() => setThemeDropdown(false)}
        >
          <p className=" cursor-pointer relative z-20">
            <Image src={sun_and_moon} width={64} height={64} alt="theme" />
          </p>
          {themeDropDown && (
            <motion.div
              className="absolute top-10 right-10 bg-[#93785b] w-20 text-center p-2 rounded px-4 shadow-lg"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.p
                onClick={() => {
                  setTheme("light");
                  setThemeDropdown(false);
                }}
                className=" cursor-pointer mb-1 hover:font-bold"
                variants={childVariants}
              >
                Light
              </motion.p>
              <motion.p
                onClick={() => {
                  setTheme("dark");
                  setThemeDropdown(false);
                }}
                className=" cursor-pointer hover:font-bold"
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
