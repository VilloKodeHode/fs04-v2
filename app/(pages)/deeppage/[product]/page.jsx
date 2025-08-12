import productData from "@/data/products.json";
import Image from "next/image";
import Link from "next/link";

export default async function ProductPage({ params }) {
  console.log(productData);
  const getParam = await params;

  console.log("getParam:", getParam);

  const param = getParam.product;

  console.log("param:", param);

  const product = productData.products[param - 1];

  console.log("product:", product);

  if (!product) {
    return (
      <>
        <section className="bg-red-900 flex flex-col justify-center items-center text-6xl h-300">
          <h2 className="text-7x1 text-orange-600">Product does not exist</h2>
          <button>
            <Link href="/products">Back</Link>
          </button>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section className="min-h-screen py-24 bg-red-800 flex justify-center items-center flex-col gap-24">
          <h2 className="text-7x1 p-8 border-2 border-green-500 rounded bg-white/50">
            {product.name}
          </h2>
          <div className="max-w-[350px] h-auto">
            <Image
              alt={`image of ${product.name}`}
              src={product.image}
              width={300}
              height={300}
            />
          </div>
          <div>
            <p>${product.price}</p>
            <p>${product.description}</p>
            <p>${product.stock}</p>
          </div>
        </section>
      </>
    );
  }
}
