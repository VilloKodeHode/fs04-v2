import { baseUrl } from "@/utils/baseUrl";
import Image from "next/image";

export default async function AnimalsPage() {
  const fetchAnimals = await fetch(`${baseUrl}/api/animals`, {
    cache: "no-store",
  });

  const animals = await fetchAnimals.json();

  console.log(animals);

  return (
    <>
      <section className="min-h-screen py-24 flex flex-col justify-center items-center bg-purple-300">
        <h1>Cooler Animals</h1>
        <div className="grid grid-col-1 md:grid-cols-3 gap-6">
          {animals.map((animal) => (
            <div
              className="p-4 bg-slate-800 text-white"
              key={animal.name + animal.id}>
              <Image
                src={animal.image}
                alt={`Bilde av ${animal.name}, som er ${animal.description}`}
                width={200}
                height={200}
                className="rounded-lg"
              />
              <h2 className="text-xl font-semibold mt-4">{animal.name}</h2>
              <p className="italic">{animal.species}</p>
              <p className="text-sm mt-2">{animal.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
