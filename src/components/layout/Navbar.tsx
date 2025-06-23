"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { motion, AnimatePresence } from "framer-motion";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import { navmenu } from "@/lib/helpers/navmenu";
import clsx from "clsx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return pathname == path;
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={clsx(
        "fixed top-0 w-full tranisiton-all duration-300 z-50",
        isScrolled ? "bg-neutral-900/50 backdrop-blur-sm" : "bg-neutral-900"
      )}>
      <div className="py-4 px-5 md:px-7 lg:max-w-[1200px] lg:mx-auto flex items-center justify-between">
        <div className="logo">
          <Image
            src={"/images/logo/rinoyellow.png"}
            width={1024}
            height={1024}
            alt="Logo"
            className="w-12 h-12"
          />
        </div>
        {/* NAVBAR FOR MOBILE - START */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="cursor-pointer group">
            <HiBars3BottomRight
              size={32}
              className="text-white group-hover:text-amber-300"
            />
          </button>

          <AnimatePresence>
            {isOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  onClick={toggleMenu}
                  className="fixed inset-0 bg-black/30 backdrop-blur-xs z-10"></motion.div>
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  onClick={(e) => e.stopPropagation()}
                  className="fixed top-0 bottom-0 right-0 w-3/5 p-4 bg-neutral-900 z-20 shadow-md shadow-black">
                  <button
                    type="button"
                    onClick={toggleMenu}
                    className="absolute top-4 right-3 p-3 transition-all duration-300 ease-in-out hover:bg-stone-800 rounded-md group cursor-pointer">
                    <HiXMark
                      size={32}
                      className="text-white group-hover:text-amber-300 transition-colors duration-300 ease-in-out"
                    />
                  </button>

                  <ul className="mt-16">
                    {navmenu.map((item) => {
                      return (
                        <li key={item.id}>
                          <Link
                            href={item.path}
                            className={clsx(
                              "flex gap-3 items-center px-4 py-5 text-white text-lg hover:bg-stone-800 transition-all duration-300 ease-in-out rounded-md cursor-pointer",
                              isActive(item.path)
                                ? "bg-stone-800 font-bold"
                                : ""
                            )}>
                            <span className="text-amber-300">
                              {item.icon && <item.icon size={24} />}
                            </span>
                            <span>{item.name}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
        {/* NAVBAR FOR MOBILE - END */}

        {/* NAVBAR FOR TABLET/DESKTOP - START */}
        <ul className="hidden md:flex space-x-5">
          {navmenu.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  href={item.path}
                  className={clsx(
                    "hover:text-amber-300 transition-color duration-300 ease-in-out cursor-pointer",
                    isActive(item.path)
                      ? "text-amber-300 font-bold"
                      : "text-white"
                  )}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* NAVBAR FOR TABLET/DESKTOP - END */}
      </div>
    </nav>
  );
}

export default Navbar;
