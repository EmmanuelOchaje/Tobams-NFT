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
    id: number;
  }[];
};

const data = [
  {
    src: "/assets/slide-1.png",
    text: "Tristique diam a, enim, eros tellus. Viverra etiam",
    eth: "2.55",
    time: "2:41",
    bid: "14 people are bidding",
    like: 54,
    height: 200,
    id: 1,
  },
  {
    src: "/assets/slide-2.png",
    text: "Vulputate felis purus viverra morbi facilisi eget",
    eth: "3.19",
    time: "2:41",
    bid: "35 people are bidding",
    like: 120,
    id: 2,
  },
  {
    src: "/assets/slide-3.png",
    text: "Dui accumsan leo vestibulum ornare eu",
    eth: "1.11",
    time: "22:59",
    id: 3,

    bid: "101 people are bidding",
    like: 570,
  },
  {
    src: "/assets/slide-4.png",
    text: "Senectus adipiscing nascetur accumsan etiam",
    eth: "1.63",
    time: "37:01",
    id: 4,

    bid: "12 people are bidding",
    like: 98,
  },
  {
    src: "/assets/slide-5.png",
    text: "Tristique diam a, enim, eros tellus. Viverra etiam",
    eth: "2.55",
    time: "2:41",
    id: 5,
    bid: "14 people are bidding",
    like: 54,
    height: 200,
  },
];
export default function Auctions() {
  return (
    <section className="b tex-[#7780A1] py-10">
      <div>
        <h3 className="text-center text-white">Latest Live Auctions</h3>
        <div className="flex justify-center">
          <AuctionCard data={data} />
        </div>
      </div>
    </section>
  );
}
