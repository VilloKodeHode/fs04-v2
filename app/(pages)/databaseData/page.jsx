import { baseUrl } from "@/utils/baseUrl";
import { ItemList } from "./components/ItemList";

export default async function DataBaseDataPage() {
  const data = await fetch(`${baseUrl}/api/mongodb`, {
    method: "GET",
    cache: "no-store",
  });

  const items = await data.json();

  console.log(items);

  return (
    <>
      <section className="min-h-screen py-24 flex flex-col gap-24 justify-center items-center bg-fuchsia-400">
        <h1>This pages shows the content of our mongoDB database</h1>
        <ItemList initialItems={items} />
      </section>
    </>
  );
}
