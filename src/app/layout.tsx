import "../styles/globals.css";
import { poppins, montserrat, raleway } from "../styles/fonts";
import { Navbar } from "@/components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.variable} ${montserrat.variable} ${raleway.variable} antialiased`}>
        <Navbar />
        <div className="bg-neutral-900 text-white mt-16 md:mt-17">
          {children}
        </div>
      </body>
    </html>
  );
}
