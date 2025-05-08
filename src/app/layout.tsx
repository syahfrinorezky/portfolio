import "../styles/globals.css";
import { poppins, montserrat, raleway } from "../styles/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.variable} ${montserrat.variable} ${raleway.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
