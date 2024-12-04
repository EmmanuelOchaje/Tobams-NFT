import Image from "next/image";
import React from "react";

const OffersTile1 = () => {
  return (
    <div className="border border-[#262840] rounded-lg h-full p-2">
      <h2 className="text-white my-4 w-[200p]">
        Check Out the <br /> Hootest Sales Offers
      </h2>
      <div className="flex">
        <div className="m-1 rounded-lg">
          <div className="relative w-[165px] h-[200px]">
            <Image
              src="/assets/image-5.png"
              className="rounded-lg"
              alt="/"
              fill
            />
          </div>
          <p className="text-[12px] my-2 w-[150px] text-white">
            Fames habitasse risus ultricies tortor sit
          </p>
          {/* time */}
          <div className="flex justify-between">
            <p className="text-white my-1 text-[10px] flex">
              <span className="mr-1">
                <Image src="/assets/time.png" alt="/" width={15} height={10} />
              </span>
              22.59
            </p>

            <button className="bg-[#060714] h-fit p-1 w-fit text-[#514CFF] p- text-[11px] rounded-lg">
              2.55 ETH
            </button>
          </div>

          <hr className="border-[#262840] mx-2 my-2" />
          <p className="flex justify-between text-[10px] text-[#7780A1]">
            101 people are bidding{" "}
            <span className="mt-1">
              <div className="h-fit m-auto">
                <Image
                  src="/assets/like-trans.png"
                  className=" mr-1"
                  alt=""
                  width={12}
                  height={12}
                />
              </div>
            </span>
          </p>
        </div>
        {/* button overlay */}
        {/* <button className="absolute z-10 flex justify-center bottom-[52%] left-[54%] p-4 rounded-full h-[50px] w-[50px] bg-[#262840CC]">
          <Image
            src="/assets/arr-right.png"
            alt="/"
            className=""
            width={7}
            height={12}
          />
        </button> */}

        <div className="m-1 opacity-[30%] rounded-lg">
          <div className="relative w-[135px] h-[200px]">
            <Image
              src="/assets/image-6.png"
              className="rounded-lg"
              alt="/"
              fill
            />
          </div>
          <p className="text-[12px] my-2 w-[130px] text-white">
            Fames habitasse risus ultricies tortor sit
          </p>
          {/* time */}
          <div className="flex justify-between">
            <p className="text-white my-1 text-[10px] flex">
              <span className="mr-1">
                <Image src="/assets/time.png" alt="/" width={15} height={10} />
              </span>
              22.59
            </p>

            <button className="bg-[#514CFF26] h-fit p-1 w-fit text-[#514CFF] p- text-[11px] rounded-lg">
              2.55 ETH
            </button>
          </div>

          <hr className="border-[#262840] mx-2 my-2" />
          <p className="flex justify-between text-[10px] text-[#7780A1]">
            101 people are bidding{" "}
            <span className="mt-1">
              <div className="h-fit m-auto">
                <Image
                  src="/assets/like-trans.png"
                  className=" mr-1"
                  alt=""
                  width={12}
                  height={12}
                />
              </div>
            </span>
          </p>
        </div>
      </div>
      <button className="text-[#7780A1] my-4 text-[13px] w-full p-2 rounded-xl border border-[#262840]">
        See More
      </button>
    </div>
  );
};

export default OffersTile1;
