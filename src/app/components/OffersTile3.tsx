import Image from "next/image";

const data = [
  {
    src: "/assets/image-7.png",
    text: "Vulputate velit viverra volutpat volutpat tristique",
  },
  {
    src: "/assets/image-0.png",
    text: "Egestas blandit sit egestas non sed. Purus semper",
  },
  {
    src: "/assets/image-8.png",
    text: "Id ut consequat netus nec vel amet ut porta in augue",
  },
  {
    src: "/assets/image-9.png",
    text: "Sed et nibh felis integer tellus turpin",
  },
];

const OffersTile3 = () => {
  return (
    <div className="border mx-4 border-[#262840] w-[316px] h-full rounded-lg p-4">
      <h3 className="text-white my-3">Top NFT at a lower price</h3>

      <div>
        {data.map((data, idx) => (
          <div>
            <div className="flex my-2">
              <div key={idx} className="relative w-[70px] h-[70px] mx-2">
                <Image src={data.src} fill alt="/" className="rounded-lg" />
              </div>

              <div>
                <p className="text-white text-[11px]">{data.text}</p>

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
          </div>
        ))}
      </div>
      <button className="text-[#7780A1] my-4 mt- text-[13px] w-full p-2 rounded-xl border border-[#262840]">
        See More
      </button>
    </div>
  );
};

export default OffersTile3;
