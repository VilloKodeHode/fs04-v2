import { MappedBoxes } from "@/components/base/Box";

export default function BoxSection() {
  return (
    <section className="h-screen flex flex-col gap-12 justify-center items-center bg-amber-700">
      <h2 className="text-5xl">Main page section 2</h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-12">
        <MappedBoxes />

        {/* Nivå tre: */}
        {/* {boxData.map((box, index) => (
            <Box
              key={box + index}
              text={box}
            />
          ))} */}

        {/* Nivå to: */}
        {/* <Box text="one" />
          <Box text="two" />
          <Box text="three" />
          <Box text="four" />
          <Box text="five" />
          <Box text="six" />
          <Box text="seven" />
          <Box text="eight" /> */}

        {/* Nivå en: */}
        {/* <div className="border-2 text-orange-300 p-4 border-orange-300 text-center">
            one
          </div>
          <div className="border-2 text-orange-300 p-4 border-orange-300 text-center">
            two
          </div>
          <div className="border-2 text-orange-300 p-4 border-orange-300 text-center">
            three
          </div>
          <div className="border-2 text-orange-300 p-4 border-orange-300 text-center">
            four
          </div>
          <div className="border-2 text-orange-300 p-4 border-orange-300 text-center">
            five
          </div>
          <div className="border-2 text-orange-300 p-4 border-orange-300 text-center">
            six
          </div>
          <div className="border-2 text-orange-300 p-4 border-orange-300 text-center">
            seven
          </div>
          <div className="border-2 text-orange-300 p-4 border-orange-300 text-center">
            eight
          </div> */}
      </div>
    </section>
  );
}
