import Image from "next/image";
import Navbar from "./components/Navbar";
import { Sora } from "next/font/google";
import Hero from "./components/Hero";

const sora = Sora({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={sora.className}>
      <div className="hero">
        <div className="her">
          <Navbar />
          <Hero />
        </div>
      </div>
    </main>
  );
}
