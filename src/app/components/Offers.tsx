import Image from "next/image";
import OffersTile1 from "./OffersTile1";
import OffersTile2 from "./OffersTile2";
import OffersTile3 from "./OffersTile3";

const Offers = () => {
  return (
    <section className="bg min-h-[100vh]">
      <div className="flex justify-center relative">
        <OffersTile1 />
        <OffersTile2 />
        <OffersTile3 />
      </div>
    </section>
  );
};

export default Offers;
