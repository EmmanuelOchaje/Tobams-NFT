import ButtonTansparent from "./ui/ButtonTransparent";
import Tile from "./ui/Tile";

const data = [
  {
    src: "/assets/det-1.png",
    text: "Faucibus habitasse at et platea massa mauris",
  },
  {
    src: "/assets/det-2.png",
    text: "Diam purus sagittis nisl erat mauris",
  },
  {
    src: "/assets/det-3.png",
    text: "Nascetur mauris viverra vel id id sem leo",
  },
  {
    src: "/assets/det-4.png",
    text: "Velit, fusce id non dui amet amet maecenas",
  },
  {
    src: "/assets/det-5.png",
    text: "Tellus duis neque fringilla pulvinar gravida",
  },
  {
    src: "/assets/det-6.png",
    text: "Odio lacus neque ultrices purus eget",
  },
];

const OverlineDetails = () => {
  return (
    <section>
      <div className="flex justify-center">
        {data.map((data, id) => (
          <div className="m-1">
            <Tile data={data} />
          </div>
        ))}
      </div>

      <div className="flex justify-center my-10">
        <ButtonTansparent>See More</ButtonTansparent>
      </div>
    </section>
  );
};

export default OverlineDetails;
