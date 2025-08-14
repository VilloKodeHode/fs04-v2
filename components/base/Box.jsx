import { boxData } from "@/data/boxData";

export const Box = ({ text }) => {
  return (
    <>
      <div className="border-8 text-3xl text-orange-300 p-8 border-orange-300 text-center">
        {text}
      </div>
    </>
  );
};

export const MappedBoxes = () => {
  return (
    <>
      {boxData.map((box, index) => (
        <Box
          key={box + index}
          text={box}
        />
      ))}
    </>
  );
};

export const MapBox = () => {
  return (
    <>
      {boxData.map((text, index) => (
        <div
          key={text + index}
          className="border-8 text-3xl text-orange-300 p-8 border-orange-300 text-center">
          {text}
        </div>
      ))}
    </>
  );
};
