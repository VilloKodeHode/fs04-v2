import { boxData } from "@/data/boxData";

// 1–3999 til romertall
const toRoman = (input) => {
  const n = typeof input === "number" ? input : Number(String(input).trim());
  if (!Number.isFinite(n) || n <= 0 || n >= 4000) return String(input); // behold original ved 0/NaN/>3999
  const table = [
    [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
    [100, "C"],  [90, "XC"],  [50, "L"], [40, "XL"],
    [10, "X"],   [9, "IX"],   [5, "V"],  [4, "IV"], [1, "I"],
  ];
  let v = Math.floor(n), out = "";
  for (const [val, sym] of table) while (v >= val) { out += sym; v -= val; }
  return out;
};

// Plukk ut et tall uansett form
const asRomanDisplay = (item) => {
  if (item == null) return "";
  // Tall eller numerisk streng
  if (typeof item === "number" || /^\s*\d+\s*$/.test(String(item))) return toRoman(item);
  // Objekt med mulig tallfelt
  if (typeof item === "object") {
    const maybe =
      item.number ?? item.value ?? item.count ?? item.id ?? item.index;
    if (maybe != null && /^\s*\d+\s*$/.test(String(maybe))) return toRoman(maybe);
    // Fallback: vis label/text hvis ikke tall
    return String(item.label ?? item.text ?? "");
  }
  // Ikke tall: vis som tekst
  return String(item);
};

export const Box = ({ item }) => {
  return (
    <div className="border-8 text-3xl text-orange-300 p-8 border-orange-300 text-center">
      {asRomanDisplay(item)}
    </div>
  );
};

export const MappedBoxes = () => {
  return (
    <>
      {boxData.map((item, index) => (
        <Box key={`box-${index}`} item={item} />
      ))}
    </>
  );
};

export const MapBox = () => {
  return (
    <>
      {boxData.map((item, index) => (
        <div
          key={`mapbox-${index}`}
          className="border-8 text-3xl text-orange-300 p-8 border-orange-300 text-center"
        >
          {asRomanDisplay(item)}
        </div>
      ))}
    </>
  );
};
