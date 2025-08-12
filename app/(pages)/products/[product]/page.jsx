import productData from "@/data/products.json";
import Image from "next/image";
import Link from "next/link";

export default async function ProductPage({ params }) {
  const getParam = await params;
  // console.log(productData);

  const param = getParam.product;

  console.log(param);
  const product = productData.products[param - 1];

  console.log(product);

  if (!product) {
    return (
      <>
        <section className="h-screen flex justify-center items-center bg-red-800">
          <h1 className="text-7xl">PRODUCT DOES NOT EXIST!</h1>
          <button className="px-4 bg-green-500 rounded hover:bg-green-700 text-green-100 text-3xl">
            <Link href="/products">Back</Link>
          </button>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section className="min-h-screen py-24 flex flex-col gap-24 justify-center items-center bg-sky-800">
          <button className="px-4 bg-green-500 rounded hover:bg-green-700 text-green-100 text-3xl">
            <Link href="/products">Back</Link>
          </button>
          <div className="p-8 border-2 border-green-500 rounded bg-white/50">
            <h1>{product.name}</h1>
            <p>Brand: {product.brand}</p>
            <div className="max-w-[350px] h-auto">
              <Image
                alt={`image of ${product.name}`}
                src={product.image}
                width={600}
                height={600}
              />
            </div>
            <p>Price ${product.price}</p>
            <p>Description: {product.description}</p>
            <p>Stock: {product.stock}</p>
            <p>Value of Stock: ${product.stock * product.price}</p>
          </div>
        </section>
      </>
    );
  }
}
