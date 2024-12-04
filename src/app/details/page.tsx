import React from "react";
import Navbar from "../components/Navbar";
import HeroDetails from "../components/HeroDetails";
import { Over_the_Rainbow, Sora } from "next/font/google";
import Footer from "../components/Footer";
import OverlineDetails from "../components/OVerlineDetails";

const sora = Sora({ subsets: ["latin"] });

const Details = () => {
  return (
    <main className={sora.className}>
      <div className="bg">
        <Navbar />
        <HeroDetails />
        <OverlineDetails />
        <Footer />
      </div>
    </main>
  );
};

export default Details;
