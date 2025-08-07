/** @format */

import "@/style/globals.css";
import { poppins, montserrat } from "@/style/font";
import clsx from "clsx";
import { ThemeProvider } from "next-themes";

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
