import Image from "next/image";

type props = {
  data: {
    src: string;
    eth: string;
  };
};

const SliderTile = ({ data }: props) => {
  return (
    //reusable component for each of the images close to the footer
    <div className="mr-4">
      <div className="w-[50px] h-[50px] relative">
        <Image className="rounded-lg" src={data.src} fill alt="/" />
      </div>
      <p className="m-auto my-3 text-[14px] text-[#7780A1] w-[70px]">
        {data.eth} ETH
      </p>
    </div>
  );
};

export default SliderTile;
