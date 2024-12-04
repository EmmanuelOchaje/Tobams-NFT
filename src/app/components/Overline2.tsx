import Image from "next/image";
import Button from "./ui/Button";
import ButtonTansparent from "./ui/ButtonTransparent";

const Overline2 = () => {
  return (
    <section className="b px-[5rem] py-[5rem] flex flex-row-reverse justify-center">
      <div>
        <h3 className="text-[#7780A1] py-4">OVERLINE</h3>
        <h1 className="w-[580px] text-5xl text-white">
          Habitant tristique aliquam in vel scelerisque
        </h1>
        <p className="w-[500px] text-[#7780A1] my-4">
          Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
          pulvinar ultricies dolor feugiat aliquam commodo.
        </p>

        <div className="flex justify-between w-[400px]">
          <div className="m-2">
            <div className="relative w-[30px] h-[30px]">
              <Image src="/assets/cont-icon.png" fill alt="/" />
            </div>
            <h3 className="text-white">Sollicitudin sapien</h3>
            <p className="text-[#7780A1] ">Cursus fermentum</p>
          </div>

          <div className="m-2">
            <div className="relative w-[30px] h-[30px]">
              <Image src="/assets/des-icon.png" fill alt="/" />
            </div>
            <h3 className="text-white text[15px]">Pulvinar metus</h3>
            <p className="text-[#7780A1]">Nunc sed</p>
          </div>
        </div>

        <div className="flex my-4">
          <Button>Get Started</Button>
          <ButtonTansparent>Learn More</ButtonTansparent>
        </div>
      </div>

      <div className="px-[8rem] py-[5rem]">
        <Image src="/assets/overline-2.png" alt="" width={400} height={400} />
      </div>
    </section>
  );
};

export default Overline2;
