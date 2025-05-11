"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { menuLinkItems } from "@/lib/MenuLinks";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // HANDLER SCROLL
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ACTIVE LINKS CHECKER
  const isActive = (path: string) => {
    if (path === "/") return pathname === path;
    return pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 font-primary ${
        isScrolled ? "bg-[rgba(0,0,0,0.2)] backdrop-blur-md" : "bg-neutral-900"
      }`}>
      <div className="container mx-auto px-5 py-3 flex justify-between items-center md:py-2">
        {/* LOGO */}
        <div className="logo">
          <Link href="/">
            <Image
              src="/images/logorino.png"
              width={50}
              height={50}
              alt="Logo"
              className="w-10 h-auto md:w-13 md:h-auto"
            />
          </Link>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex">
          <ul className="flex items-center gap-8 text-white">
            {menuLinkItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className={` ${
                    isActive(item.path)
                      ? "text-amber-300 font-extrabold"
                      : "transition-colors ease-in-out duration-300 font-medium hover:text-amber-300"
                  }`}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* HAMBURGER BUTTON */}
        <button
          className="md:hidden text-xl text-white p-2 hover:text-amber-300 hover:bg-neutral-800 hover:rounded-md"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}>
          {isOpen ? <HiXMark size={25} /> : <HiBars3 size={25} />}
        </button>

        {/* OVERLAY MENU MOBILE NAVIGATION */}
        <div
          className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsOpen(false)}></div>

        {/* MOBILE SLIDE MENU NAVIGATION */}
        <div
          className={`fixed top-0 right-0 w-2/3 h-full bg-neutral-800 z-50 shadow-2xl transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}>
          <button
            className="absolute top-5 right-4 text-white text-2xl p-2 hover:text-amber-300 hover:bg-neutral-900 hover:rounded-md"
            onClick={() => setIsOpen(false)}>
            <HiXMark />
          </button>

          <ul className="mt-16 px-6 py-4 space-y-4">
            {menuLinkItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className={`block p-3 rounded-md transition-all ease-in-out duration-300 ${
                    isActive(item.path)
                      ? "text-amber-300 font-extrabold bg-neutral-900"
                      : "text-slate-100 font-medium hover:text-amber-300 hover:font-bold"
                  }`}
                  onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
