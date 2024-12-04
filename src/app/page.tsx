import Image from "next/image";
import Navbar from "./components/Navbar";
import { Sora } from "next/font/google";
import Hero from "./components/Hero";
import Auctions from "./components/Auctions";

const sora = Sora({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={sora.className}>
      {/* contains the Navabr and the hero, used in getting the desired background color and image */}
      <div className="first-screen">
        <div className="hero">
          <Navbar />
          <Hero />
        </div>
      </div>
      <Auctions />
    </main>
  );
}
