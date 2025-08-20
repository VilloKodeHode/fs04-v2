// import productData from "@/data/products.json";

import { Something } from "./components/Something";

export default function ProductsPage() {
  //   console.log(productData);
  return (
    <>
      <section className="h-screen flex justify-center items-center bg-pink-800">
        <h1 className="text-7xl">Better Products Page</h1>
      </section>
      <Something />
    </>
  );
}
