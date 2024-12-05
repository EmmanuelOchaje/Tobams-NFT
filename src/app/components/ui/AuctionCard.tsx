"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type props = {
  data: {
    src: string;
    text: string;
    eth: string;
    time: string;
    bid: string;
    like: number;
    id: number;
  }[];
};

const AuctionCard = ({ data }: props) => {
  // this state handles the like button for this section

  const [likedItems, setLikedItems] = useState<Set<number>>(new Set());

  function handleLike(id: number): void {
    setLikedItems((prevLikedItems) => {
      const newLikedItems = new Set(prevLikedItems);
      if (newLikedItems.has(id)) {
        newLikedItems.delete(id);
      } else {
        newLikedItems.add(id);
      }
      return newLikedItems;
    });
  }
  return (
    <div className="flex justify-center">
      {data.map((data, idx) => (
        <div
          className="border rounded-lg w-[250px] p-2 m-2 border-[#262840]"
          key={idx}
        >
          <div className="mb-4 w-full h-[300px] relative">
            <Image src={data.src} className="rounded-lg" alt="/" fill />
          </div>
          <div className="flex">
            <p className="text-white w-[170px] mr-4 text-[12px]">{data.text}</p>
            <button className="bg-[#514CFF26] h-8 p-1 w-20 text-[#514CFF] p- text-[13px] rounded-lg">
              {data.eth} ETH
            </button>
          </div>
          <p className="text-white my-4 text-[12px] flex">
            <span className="mr-1">
              <Image src="/assets/time.png" alt="/" width={15} height={10} />
            </span>
            {data.time} min left
          </p>
          <div className=""></div>
          <hr className="border-[#262840] mx-2" />
          {/* images of people bidding */}
          <div className="my-2 mb-10">
            {/* <p className="text-white text-[12px] float-right py-">
              {data.like}
            </p> */}
            <div className="relative">
              <Image
                src="/assets/avatar1.png"
                className="absolute left-[0%]"
                alt=""
                width={30}
                height={300}
              />
              <Image
                src="/assets/avatar2.png"
                className="absolute left-[8%]"
                alt=""
                width={30}
                height={300}
              />
              <Image
                src="/assets/avatar3.png"
                className="absolute left-[16%]"
                alt=""
                width={30}
                height={300}
              />
              <Image
                src="/assets/avatar4.png"
                className="absolute left-[24%]"
                alt=""
                width={30}
                height={300}
              />
              <span className="text-[#7780A1] text-[9px] absolute left-[37%] my-2">
                {data.bid}
              </span>
              <span className="text-[#7780A1] flex text-[10px] absolute h-fit left-[85%] my-2">
                <div className="h-fit m-auto">
                  <Image
                    onClick={() => handleLike(data.id)} // Use item.id to set the like
                    src={
                      likedItems.has(data.id)
                        ? "/assets/like.png"
                        : "/assets/like-trans.png"
                    }
                    className=" mr-1"
                    alt=""
                    width={12}
                    height={12}
                  />
                </div>
                {data.like}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AuctionCard;
