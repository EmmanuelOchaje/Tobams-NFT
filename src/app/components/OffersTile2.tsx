import Image from "next/image";
import React from "react";

const OffersTile2 = () => {
  return (
    <div>
      <div className="border mx-4 border-[#262840] w-[316px] bg-gray-900 h-full rounded-lg p-2">
        <div className="relative w-full  h-[310px]">
          <Image src="/assets/hand.png" alt="" fill />
        </div>
        <h3 className="text-white w-[250px] my-2 ">
          Get started creating & selling your NFTs
        </h3>
        <p className="text-[13px] text-[#7780A1] w-[250px]">
          Nunc gravida faucibus netus feugiat tellus, viverra massa feugiat. Mi
          est sit.
        </p>
        <button className="text-white bg-[#2A27C9] my-4 text-[13px] w-full p-2 rounded-xl border border-[#262840]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default OffersTile2;
