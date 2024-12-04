// import logo from 'public/assets/logo.png';

import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";
import ButtonTansparent from "./ui/ButtonTransparent";

export default function Navbar() {
  return (
    <nav className="bg-[#0D0F2B-] flex justify-between px-10 py-4">
      <div className="h-fit my-auto">
        <Image src="/assets/logo.png" alt="logo" width={30} height={30} />
      </div>

      <ul className="flex py-3 w-fit ml-[10rem]">
        <Link className="text-[#7780A1] mx-4 text-[13px]" href={"/"}>
          Auction
        </Link>
        <Link className="text-[#7780A1] mx-4 text-[13px]" href={"/"}>
          RoadMap
        </Link>
        <Link className="text-[#7780A1] mx-4 text-[13px]" href={"/"}>
          Discover
        </Link>
        <Link className="text-[#7780A1] mx-4 text-[13px]" href={"/"}>
          Community
        </Link>
      </ul>

      <div>
        <ButtonTansparent>Contact</ButtonTansparent>
        <Button>My Account</Button>
      </div>
    </nav>
  );
}
