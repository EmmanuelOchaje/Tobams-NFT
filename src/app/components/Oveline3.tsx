import Image from "next/image";
import ButtonTansparent from "./ui/ButtonTransparent";
import Tile from "./ui/Tile";

const data: { src: string; text: string }[] = [
  {
    text: "Faucibus habitasse at et platea massa mauris",
    src: "/assets/image-11.png", // Fixed the path typo
  },
  {
    text: "Diam purus sagittis nisl erat mauris",
    src: "/assets/image-12.png",
  },
  {
    text: "Nascetur mauris viverra vel id id sem leo",
    src: "/assets/image-13.png",
  },
  {
    text: "Velit, fusce id non dui amet amet maecenas",
    src: "/assets/image-14.png",
  },
  {
    text: "Velit, fusce id non dui amet amet maecenas",
    src: "/assets/image-15.png",
  },
  {
    text: "Odio lacus neque ultrices purus eget",
    src: "/assets/image-16.png",
  },
];

const Overline3 = () => {
  return (
    <section className="border-t border-[#262840] py-10">
      <h3 className="text-[#7780A1] text-center py-4">OVERLINE</h3>

      <h2 className="text-center text-white text-3xl">
        Most popular live auctions
      </h2>

      {/* Category Slide */}
      <div className="flex justify-center">
        <p className="text-white p-1 m-2 rounded-lg border border-[#262840] w-fit">
          Architecture
        </p>
        <p className="text-white p-1 m-2 rounded-lg border border-[#262840] w-fit">
          Photography
        </p>
        <p className="text-white p-1 m-2 rounded-lg border border-[#262840] w-fit">
          Games
        </p>
        <p className="text-white p-1 m-2 rounded-lg border border-[#262840] w-fit">
          Music
        </p>
      </div>

      {/* Image Slide */}
      <div className="flex justify-center my-10">
        {data.map((item, index) => (
          <div key={index} className="m-1">
            <Tile data={item} />
          </div>
        ))}
      </div>

      <div className="my-6 w-fit m-auto">
        <ButtonTansparent>See more</ButtonTansparent>
      </div>
      <hr className="border-[#262840] mt-[5rem] mx-20" />

      {/* dashboard analysis */}
      <div className="flex justify-center">
        <div className="m-10">
          <div className="relative m-auto my-2 w-[30px] h-[30px]">
            <Image src="/assets/user.png" fill alt="/" />
          </div>
          <h2 className="text-4xl text-white text-center">300k</h2>
          <p className="text-[#7780A1] text-[13px] text-center">Users Active</p>
        </div>

        <div className="m-10">
          <div className="relative m-auto my-2 w-[30px] h-[30px]">
            <Image src="/assets/artist.png" fill alt="/" />
          </div>
          <h2 className="text-4xl text-white text-center">52,5k</h2>
          <p className="text-[#7780A1] text-[13px] text-center">Artworks</p>
        </div>
        <div className="m-10">
          <div className="relative m-auto my-2 w-[30px] h-[30px]">
            <Image src="/assets/art.png" fill alt="/" />
          </div>
          <h2 className="text-4xl text-white text-center">17,5k </h2>
          <p className="text-[#7780A1] text-[13px] text-center">Artists</p>
        </div>
        <div className="m-10">
          <div className="relative m-auto my-2 w-[30px] h-[30px]">
            <Image src="/assets/wallet.png" fill alt="/" />
          </div>
          <h2 className="text-4xl text-white text-center">35.58</h2>
          <p className="text-[#7780A1] text-[13px] text-center">Eth Spent</p>
        </div>
      </div>
    </section>
  );
};

export default Overline3;
