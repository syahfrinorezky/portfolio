/** @format */

"use client";

import React from "react";

import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi2";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant={"ghost"}
      className="relative w-10 h-10 rounded-full cursor-pointer !bg-transparent"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <HiSun className="absolute transition-all duration-300 ease-in-out rotate-0 scale-100 opacity-100 dark:rotate-90 dark:scale-0 dark:opacity-0" />
      <HiMoon className="absolute transition-all duration-300 ease-in-out rotate-90 scale-0 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100" />
    </Button>
  );
}

export default ThemeToggle;
