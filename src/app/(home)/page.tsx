/** @format */

import React from "react";
import Hero from "./sections/Hero";

export const metadata = {
  title: "RR - Home",
  icons: {
    icon: "/images/logo/yellowlogo.png",
  },
};

function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}

export default Home;
