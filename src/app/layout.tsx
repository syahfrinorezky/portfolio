import "@/style/globals.css";
import { poppins, montserrat, quicksand, inter } from "@/style/font";
import { Navbar, Footer } from "@/components";

import clsx from "clsx";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          poppins.variable,
          montserrat.variable,
          quicksand.variable,
          inter.variable
        )}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
