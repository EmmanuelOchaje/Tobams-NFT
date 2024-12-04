import Image from "next/image";
import React from "react";

const HeroDetails = () => {
  return (
    <div>
      <div className="flex justify-center py-10">
        {/*a display of the hero section on the details page */}
        <div>
          <div className="relative w-[400px] h-full">
            <Image src="/assets/details.png" alt="" fill />
          </div>
        </div>

        {/* right side */}
        <div className="pl-[4rem] flex flex-col">
          <div>
            <h2 className="w-[300px] text-4xl text-white">
              Dui accumsan leo vestibulum ornare
            </h2>
            <p className="text-[#7780A1] text-[15px] w-[400px]">
              Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
              pulvinar ultricies dolor feugiat aliquam commodo.
            </p>
          </div>
          {/* creator */}
          <div className="flex my-4">
            <div className="flex mr-6">
              <div className="w-[50px] mx-2 h-[50px] relative">
                <Image
                  src="/assets/avatar6.png"
                  className="rounded-full"
                  fill
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-white text-[15px]">Creator</h3>
                <p className="text-[#7780A1] text-[12px]">@brook_sim</p>
              </div>
            </div>

            <div className="flex">
              <div className="w-[50px] mx-2 h-[50px] relative">
                <Image
                  src="/assets/avatar5.png"
                  className="rounded-full"
                  fill
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-white text-[15px]">Creator</h3>
                <p className="text-[#7780A1] text-[12px]">@Afterlife</p>
              </div>
            </div>
          </div>

          {/* place a bid */}
          <div className="border rounded-lg bg-[#060714] border-[#262840] p-4 w-fit">
            <div className="flex justify-between px-">
              <div className="m-4">
                <p className="text-[#7780A1] text-[12px]">Current Price</p>
                <h3 className="text-white text-3xl">
                  5.25 <span className="text-[15px]">ETH</span>
                </h3>
              </div>

              <div className="m-4">
                <p className="text-[#7780A1] text-[10px]">Time left</p>
                <h3 className="text-white text-[15px]">22:59 min</h3>
                <p className="text-[#7780A1] text-[10px]">
                  (01.01.2022 - 01.40.47)
                </p>
              </div>
            </div>
            <button className="text-white w-full text-[13px] bg-[#4745D0] p-2 rounded-lg m-1">
              Place a bid
            </button>
          </div>

          {/*  */}
          <div className="py-4">
            <p className="text-[#7780A1] text-[10px]">
              History of bids (12 people bidding)
            </p>
            <div className="h-[200px] w-[300px] relative">
              <Image src="/assets/graph.png" fill alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDetails;
