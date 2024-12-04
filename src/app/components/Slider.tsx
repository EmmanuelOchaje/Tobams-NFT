import React from "react";
import SliderTile from "./SlideTile";
type props = {
  data: {
    src: string;
    eth: string;
  };
};

const data = [
  {
    eth: "1.11",
    src: "/assets/sld1.png",
  },
  {
    eth: "1.51",
    src: "/assets/sld2.png",
  },
  {
    eth: "3.25",
    src: "/assets/sld3.png",
  },
  {
    eth: "3.62",
    src: "/assets/sld4.png",
  },
  {
    eth: "3.82",
    src: "/assets/sld5.png",
  },
  {
    eth: "2.77",
    src: "/assets/sld6.png",
  },
  {
    eth: "1.61",
    src: "/assets/sld7.png",
  },
  {
    eth: "2.29",
    src: "/assets/sld8.png",
  },
  {
    eth: "2.03",
    src: "/assets/sld9.png",
  },
  {
    eth: "3.69",
    src: "/assets/sld10.png",
  },
  {
    eth: "1.49",
    src: "/assets/sld11.png",
  },
  {
    eth: "3.21",
    src: "/assets/sld12.png",
  },
  {
    eth: "2.22",
    src: "/assets/sld13.png",
  },
  {
    eth: "2.82",
    src: "/assets/sld14.png",
  },
  {
    eth: "1.49",
    src: "/assets/sld15.png",
  },
  {
    eth: "1.57",
    src: "/assets/sld16.png",
  },
  {
    eth: "2.88",
    src: "/assets/sld17.png",
  },
  {
    eth: "3.51",
    src: "/assets/sld18.png",
  },
];
const Slider = () => {
  return (
    <div>
      <div className="flex overflow-hidden my-6">
        {data.map((data, id) => (
          <SliderTile data={data} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
