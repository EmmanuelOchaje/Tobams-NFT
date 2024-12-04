import Image from "next/image";
import Button from "./ui/Button";

const Footer = () => {
  return (
    <footer className="min-h-[50v] py-10">
      <div className="flex justify-center">
        {/* flex of the three footer boxes */}
        <div className="border border-[#262840] h-[300px] py-6 w-[400px] px-6 rounded-l-lg  flex justify-between flex-col">
          <div className="flex">
            <div className="relative w-[40px] mr-2 h-[40px]">
              <Image src="/assets/logo.png" alt="/" fill />
            </div>
            <h2 className="font-semibold my-auto text-white text-3xl">
              NFT Market
            </h2>
          </div>

          <div>
            <ul className="flex">
              <li className="mr-4 text-[#7780A1]">Support</li>
              <li className="mr-4 text-[#7780A1]">Terms of Service</li>
              <li className="mr-4 text-[#7780A1]">License</li>
            </ul>
          </div>
        </div>

        <div className="border border-[#262840] h-[300px] py-6 w-[400px] px-6  flex justify-between flex-col">
          <div>
            <ul className="">
              <li className="mb-4 text-[#7780A1]">Auctions</li>
              <li className="mb-4 text-[#7780A1]">Roadmaps</li>
              <li className="mb-4 text-[#7780A1]">Discover</li>
              <li className="mb-4 text-[#7780A1]">Community</li>

              <li>
                <Button>My Account</Button>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex">
              <div className="relative m-2 w-[25px] h-[25px]">
                <Image fill src="/assets/facebook.png" alt="/" />
              </div>
              <div className="relative m-2 w-[25px] h-[25px]">
                <Image fill src="/assets/github.png" alt="/" />
              </div>
              <div className="relative m-2 w-[25px] h-[25px]">
                <Image fill src="/assets/linkedin.png" alt="/" />
              </div>
              <div className="relative m-2 w-[25px] h-[25px]">
                <Image fill src="/assets/twitter.png" alt="/" />
              </div>
              <div className="relative m-2 w-[25px] h-[25px]">
                <Image fill src="/assets/instagram.png" alt="/" />
              </div>
            </ul>
          </div>
        </div>

        <div className="border border-[#262840] h-[300px] py-6 w-[400px] px-6 rounded-r-lg  flex justify-between flex-col">
          <div className="flex">
            <p className="text-[#7780A1] text-center">
              Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet
              velit, sed egestas in. Id nam semper dolor tellus vulputate eget
              turpis.{" "}
            </p>
          </div>

          <div>
            <div className="bg-white p-3 flex justify-between px-6 rounded-lg">
              <input type="text" placeholder="News letter" />
              <button className="text-[#2A27C9]">Sign in</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
