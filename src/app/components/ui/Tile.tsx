import Image from "next/image";
import React from "react";

type Props = {
  data: {
    src: string;
    text: string;
  };
};

const Tile = ({ data }: Props) => {
  return (
    <div className="m-1 rounded-lg">
      <div className="relative w-[165px] h-[200px]">
        <Image src={data.src} className="rounded-lg" alt="/" fill />
      </div>
      <p className="text-[12px] my-2 w-[150px] text-white">{data.text}</p>
      {/* time */}
      <div className="flex justify-between">
        <p className="text-white my-1 text-[10px] flex">
          <span className="mr-1">
            <Image src="/assets/time.png" alt="/" width={15} height={10} />
          </span>
          22.59
        </p>

        <button className="bg-[#514CFF26] h-fit p-1 w-fit text-[#514CFF] text-[11px] rounded-lg">
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
  );
};

export default Tile;
