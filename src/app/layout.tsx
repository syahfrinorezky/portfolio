/** @format */

import "@/style/globals.css";
import { poppins, montserrat } from "@/style/font";
import clsx from "clsx";
import { ThemeProvider } from "next-themes";
import Header from "@/components/layout/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RinoRezky | Portofolio",
  icons: {
    icon: "/images/logo/yellowlogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={clsx("antialiased", poppins.variable, montserrat.variable)}>
        <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
          <Header />
          <main className="transition-colors duration-300 ease-in-out">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
