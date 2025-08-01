import "@/style/globals.css";
import { poppins, montserrat } from "@/style/font";
import clsx from "clsx";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={clsx("antialiased", poppins.variable, montserrat.variable)}>
      <body>{children}</body>
    </html>
  );
}
