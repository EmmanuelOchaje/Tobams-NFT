import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[100vh] pt-20">
      <div className="w-full">
        <h3 className="text-center my-4 text-[#7780A1] text-[15px]">
          NON FUNGIBLE TOKENS
        </h3>

        {/* A new NFT */}
        <div className="flex justify-center">
          <h2 className="flex mx-auto  text-white text-6xl font-bold text-center">
            A new NFT{" "}
            <span className="ml-2 mt-1">
              <Image src="/assets/Vector.png" width={20} height={30} alt="/" />
            </span>
          </h2>
        </div>

        {/* images around the orbit */}
        <div className="absolute left-[75%] top-[85%]">
          {/* frog nft */}
          <div>
            <Image src="/assets/nft-1.png" width={70} height={30} alt="/" />
          </div>
          <p className="text-[#7780A1] mt-1">2.55 ETH</p>
        </div>
        {/* tiger */}
        <div className="absolute left-[90%]">
          <div>
            <Image src="/assets/nft-6.png" width={70} height={30} alt="/" />
          </div>
          <p className="text-[#7780A1] mt-1">2.55 ETH</p>
        </div>
        <div className="absolute left-[9%] bottom-[60%]">
          {/* parrot */}
          <div>
            <Image src="/assets/nft-4.png" width={70} height={30} alt="/" />
          </div>
          <p className="text-[#7780A1] mt-1">2.55 ETH</p>
        </div>
        {/* left edge, tortle */}
        <div className="absolute top-[90%]">
          <div>
            <Image src="/assets/nft-2.png" width={50} height={30} alt="/" />
          </div>
          <p className="text-[#7780A1] mt-1">2.55 ETH</p>
        </div>
        {/* elephant */}
        <div className="absolute left-[17.5%] bottom-[15%]">
          <div>
            <Image src="/assets/nft-5.png" width={70} height={30} alt="/" />
          </div>
          <p className="text-[#7780A1] mt-1">2.55 ETH</p>
        </div>
        {/* wolf */}
        <div className="absolute left-[75%] bottom-[60%]">
          <div>
            <Image src="/assets/nft-3.png" width={70} height={30} alt="/" />
          </div>
          <p className="text-[#7780A1] mt-1">2.55 ETH</p>
        </div>

        {/* Experience */}
        <div className="flex my-2 justify-center pl-24">
          <h2 className="flex mx-auto text-white text-6xl font-bold text-center">
            <span className="mr-2 mt-2">
              <Image src="/assets/Frame.png" width={40} height={30} alt="/" />
            </span>
            Experience
          </h2>
        </div>

        <h3 className="text-center my-6 text-[#7780A1] text-[15px]">
          Discover, collect and sell
        </h3>

        {/* input section */}
        <div className="flex bg-white px-4 w-fit m-auto rounded-lg ">
          <input
            type="text"
            className="p-1 mx-4 text-[#7780A1] w-[200px] rounded text-[12px]"
            placeholder="Items, collections and creators"
          />

          <div className="text-[#7780A1] border-l border-[#7780A1] h-fit w-[150px] my-auto flex justify-between text-[12px] px-4">
            Category
            <div className="my-auto relative w-[10px] h-[10px]">
              <Image src="/assets/arr-down.png" fill alt="" />
            </div>
          </div>

          <div className="w-[23px] h-[23px] m-auto my-2 relative">
            <Image src="/assets/search.png" alt="" fill />
          </div>
        </div>

        <div className="flex w-fit mt-32 m-auto">
          <div className="relative w-[50px] h-[50px]">
            <Image src="/assets/adidas.png" alt="" fill />
          </div>
          <div className="relative w-[80px] h-[80px]">
            <Image
              src="/assets/new-holland.png"
              alt=""
              width={100}
              height={10}
            />
          </div>
          <div className="relative w-[50px] h-[50px]">
            <Image src="/assets/nike.png" alt="" fill />
          </div>
          <div className="relative w-[80px] h-[80px]">
            <Image
              src="/assets/ritter-sport.png"
              alt=""
              width={100}
              height={10}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
