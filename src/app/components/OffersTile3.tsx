"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const data = [
  {
    src: "/assets/image-7.png",
    id: 1,
    text: "Vulputate velit viverra volutpat volutpat tristique",
  },
  {
    src: "/assets/image-0.png",
    id: 2,
    text: "Egestas blandit sit egestas non sed. Purus semper",
  },
  {
    src: "/assets/image-8.png",
    id: 3,

    text: "Id ut consequat netus nec vel amet ut porta in augue",
  },
  {
    src: "/assets/image-9.png",
    id: 4,

    text: "Sed et nibh felis integer tellus turpin",
  },
];

const OffersTile3 = () => {
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
    <div className="border mx-4 border-[#262840] w-[316px] h-full rounded-lg p-4">
      <h3 className="text-white my-3">Top NFT at a lower price</h3>

      <div>
        <div>
          {data.map((item, idx) => (
            <div key={item.id}>
              <div className="flex my-2">
                <div key={idx} className="relative w-[70px] h-[70px] mx-2">
                  <Image src={item.src} fill alt="/" className="rounded-lg" />
                </div>

                <div>
                  <p className="text-white text-[11px]">{item.text}</p>

                  {/* time left */}
                  <div className="flex justify-between my-1">
                    <p className="text-white my-1 text-[10px] flex">
                      <span className="mr-1">
                        <Image
                          src="/assets/time.png"
                          alt="/"
                          width={15}
                          height={10}
                        />
                      </span>
                      22.59
                    </p>

                    <button className="bg-[#514CFF26] h-fit p-1 w-fit text-[#514CFF] p- text-[11px] rounded-lg">
                      2.55 ETH
                    </button>
                  </div>

                  {/* amount of people bidding, and like */}
                  <div className="flex justify-between text-[10px] text-[#7780A1]">
                    101 people are bidding{" "}
                    <span className="mt-1">
                      <div className="h-fit m-auto">
                        <Image
                          onClick={() => handleLike(item.id)} // Use item.id to set the like
                          src={
                            likedItems.has(item.id)
                              ? "/assets/like.png"
                              : "/assets/like-trans.png"
                          } // Check if the item is liked
                          className="mr-1"
                          alt="Like Icon"
                          width={12}
                          height={12}
                        />
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="text-[#7780A1] my-4 mt- text-[13px] w-full p-2 rounded-xl border border-[#262840]">
        See More
      </button>
    </div>
  );
};

export default OffersTile3;
