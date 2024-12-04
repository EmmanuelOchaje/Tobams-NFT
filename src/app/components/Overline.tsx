import Image from "next/image";
import Button from "./ui/Button";
import ButtonTansparent from "./ui/ButtonTransparent";

const Overline = () => {
  return (
    <section className="bg px-[10rem] py-[5rem] flex justify-between">
      <div>
        <h3 className="text-[#7780A1] py-4">OVERLINE</h3>
        <h1 className="w-[580px] text-5xl text-white">
          Sapien ipsum scelerisque convallis fusce
        </h1>
        <p className="w-[500px] text-white my-4">
          Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
          pulvinar ultricies dolor feugiat aliquam commodo.
        </p>

        <div className="flex my-4">
          <Button>Get Started</Button>
          <ButtonTansparent>Learn More</ButtonTansparent>
        </div>
      </div>

      <div>
        <Image src="/assets/right-image.png" alt="" width={400} height={400} />
      </div>
    </section>
  );
};

export default Overline;
