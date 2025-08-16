/** @format */

"use client";

import React from "react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

import { AnimatePresence, motion } from "framer-motion";
import { useScroll } from "@/hooks/useScroll";
import { NAVIGATIONS } from "@/constants/navigations";
import ThemeToggle from "../common/theme-toggle";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";

function Header() {
  const pathname = usePathname();
  const { isScrolled, handleScroll } = useScroll(100);
  const [isSlidebarOpen, setIsSlidebarOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      className={clsx(
        "fixed top-0 w-full flex items-center z-20 shadow-md dark:shadow-none",
        isScrolled
          ? "bg-white/40 dark:bg-neutral-800/70 backdrop-blur-sm"
          : "bg-white dark:bg-neutral-800"
      )}>
      <div className="w-full flex items-center justify-between sm:container sm:mx-auto p-4 sm:py-4">
        <Link href={"/"}>
          <Image
            src={"/images/logo/yellowlogo.png"}
            width={1024}
            height={1024}
            alt="logo rinorezky"
            className="w-10 h-10"></Image>
        </Link>

        {/* desktop navbar - start */}
        <ul className="hidden sm:flex items-center gap-x-3">
          {NAVIGATIONS.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={clsx(
                  "flex items-center space-x-2 px-5 py-2 rounded-lg transition-colors duration-300 ease-in-out group",
                  pathname === item.href
                    ? isScrolled
                      ? "bg-transparent dark:bg-transparent"
                      : "bg-neutral-200 dark:bg-neutral-700"
                    : isScrolled
                    ? "bg-transparent dark:bg-transparent"
                    : "bg-white hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-900"
                )}>
                <span
                  className={clsx(
                    "transition-all duration-300 ease-in-out",
                    pathname === item.href
                      ? "text-amber-400 font-medium"
                      : "group-hover:text-amber-400 dark:text-gray-300 dark:group-hover:text-amber-400 group-hover:font-medium"
                  )}>
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden sm:block">
          <ThemeToggle />
        </div>
        {/* desktop navbar - end */}

        {/* mobile navbar - start */}
        <button
          type="button"
          className="block sm:hidden"
          onClick={() => setIsSlidebarOpen(true)}>
          <HiBars3BottomRight size={25} />
        </button>

        <AnimatePresence>
          {isSlidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onClick={() => setIsSlidebarOpen(false)}
              className="fixed sm:hidden inset-0 bg-black/20 backdrop-blur-[2px] z-50">
              <motion.div
                initial={{ x: 200 }}
                animate={{ x: 0 }}
                exit={{ x: 200 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onClick={(e) => e.stopPropagation()}
                className="fixed top-0 right-0 bg-white dark:bg-neutral-800 h-full w-3/4 p-6 z-50">
                <div className="w-full flex flex-col">
                  <div className="flex justify-between items-center">
                    <ThemeToggle />
                    <button
                      type="button"
                      className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-300 ease-in-out cursor-pointer group"
                      onClick={() => setIsSlidebarOpen(false)}>
                      <HiXMark
                        size={25}
                        className="group-hover:dark:text-amber-300"
                      />
                    </button>
                  </div>

                  <ul className="flex flex-col mt-5">
                    {NAVIGATIONS.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          onClick={() => setIsSlidebarOpen(false)}
                          className={clsx(
                            "p-4 flex items-center space-x-3 rounded-lg transition-colors duration-300 ease-in-out group",
                            pathname === item.href
                              ? "bg-neutral-200 dark:bg-neutral-700"
                              : "bg-white hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                          )}>
                          <item.icon
                            size={22}
                            className={clsx(
                              "transition-colors duration-300 ease-in-out",
                              pathname === item.href
                                ? "text-amber-400"
                                : "text-neutral-700 dark:text-white group-hover:text-amber-400 dark:group-hover:text-amber-400"
                            )}
                          />
                          <span
                            className={clsx(
                              "transition-all duration-300 ease-in-out",
                              pathname === item.href
                                ? "dark:text-amber-400 font-medium"
                                : "text-neutral-700 group-hover:text-neutral-800 dark:text-gray-300 dark:group-hover:text-text-amber-400 group-hover:font-medium"
                            )}>
                            {item.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* mobile navbar - end */}
      </div>
    </div>
  );
}

export default Header;
