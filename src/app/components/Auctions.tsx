import { text } from "stream/consumers";
import AuctionCard from "./ui/AuctionCard";

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

const data = [
  {
    src: "/assets/Slide-2.png",
    text: "Tristique diam a, enim, eros tellus. Viverra etiam",
    eth: "2.55",
    time: "2:41",
    bid: "14 people are bidding",
    like: 54,
    height: 200,
  },
  {
    src: "/assets/Slide-2.png",
    text: "Vulputate felis purus viverra morbi facilisi eget",
    eth: "3.19",
    time: "2:41",
    bid: "35 people are bidding",
    like: 120,
  },
  {
    src: "/assets/Slide-3.png",
    text: "Dui accumsan leo vestibulum ornare eu",
    eth: "1.11",
    time: "22:59",

    bid: "101 people are bidding",
    like: 570,
  },
  {
    src: "/assets/Slide-4.png",
    text: "Senectus adipiscing nascetur accumsan etiam",
    eth: "1.63",
    time: "37:01",

    bid: "12 people are bidding",
    like: 98,
  },
  {
    src: "/assets/Slide-4.png",
    text: "Tristique diam a, enim, eros tellus. Viverra etiam",
    eth: "2.55",
    time: "2:41",

    bid: "14 people are bidding",
    like: 54,
    height: 200,
  },
];
export default function Auctions() {
  return (
    <section className="bg tex-[#7780A1] py-10">
      <div>
        <h3 className="text-center text-white">Latest Live Auctions</h3>
        <div className="">
          <AuctionCard data={data} />
        </div>
      </div>
    </section>
  );
}
