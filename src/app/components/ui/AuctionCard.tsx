import Image from "next/image";

type props = {
  data: {
    src: string;
    text: string;
    eth: string;
    time: string;
    bid: string;
    like: number;
  }[];
};

const AuctionCard = ({ data }: props) => {
  return (
    <div className="flex overflow-hidden pr-[10rem]">
      {data.map((data, idx) => (
        <div className="border rounded-lg p-2 m-2 border-[#262840]" key={idx}>
          <div className="h-[400px]">
            <Image
              src={data.src}
              className="rounded-lg h-fit"
              alt="/"
              width={400}
              height={200}
              layout="responsive"
            />
          </div>
          <div className="flex px-2">
            <p className="text-white w-[170px] text-[12px]">{data.text}</p>
            <button className="bg-[#514CFF26] h-8 p-1 w-20 text-[#514CFF] p- text-[13px] rounded-lg">
              {data.eth} ETH
            </button>
          </div>
          <p className="text-white my-4 px-4 text-[12px] flex">
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
              <span className="text-[#7780A1] text-[10px] absolute left-[37%] my-2">
                {data.bid}
              </span>
              <span className="text-[#7780A1] flex text-[10px] absolute h-fit left-[85%] my-2">
                <div className="h-fit m-auto">
                  <Image
                    src="/assets/like.png"
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
