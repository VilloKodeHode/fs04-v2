import { baseUrl } from "@/utils/baseUrl";
import { Suspense } from "react";

export default async function DataBaseDataPage() {
  const data = await fetch(`${baseUrl}/api/mongodb`, {
    method: "GET",
    cache: "no-store",
  });

  //   console.log(data);

  const items = await data.json();

  console.log(items);

  return (
    <>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <section className="min-h-screen flex justify-center items-center bg-fuchsia-400">
        <h1>This pages shows the cooler content of our mongoDB database</h1>
        <ul>
          {items.map((item) => (
            <li key={item._id}>{item.name}</li>
          ))}
        </ul>
      </section>
      {/* </Suspense> */}
    </>
  );
}
