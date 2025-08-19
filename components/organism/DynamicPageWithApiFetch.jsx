import { baseUrl } from "@/utils/baseUrl";
import Image from "next/image";
import Link from "next/link";

export default async function DynamicPageWithApiFetch({
  param,
  endpoint,
  value,
}) {
  const magicDataRequest = await fetch(`${baseUrl}/api/${endpoint}`, {
    cache: "no-store",
  });

  const magicDataResult = await magicDataRequest.json();

  console.log(magicDataResult);
  console.log(param.magicProduct);

  const magicProduct = magicDataResult[param[value]];

  if (!magicProduct) {
    return (
      <>
        <section className="bg-red-900 flex flex-col justify-center items-center text-6xl h-300">
          <h2 className="text-7x1 text-orange-600">
            magicProduct does not exist
          </h2>
          <button>
            <Link href="/magicProducts">Back</Link>
          </button>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section className="min-h-screen py-24 bg-red-800 flex justify-center items-center flex-col gap-24">
          <h2 className="text-7x1 p-8 border-2 border-green-500 rounded bg-white/50">
            {magicProduct.title}
          </h2>
          <div className="w-[350px] h-auto">
            <Image
              alt={`image of ${magicProduct.title}`}
              src={magicProduct.image}
              width={300}
              height={300}
            />
          </div>
          <div>
            <p>{magicProduct.category}</p>
            <p>${magicProduct.price}</p>
            <p>{magicProduct.description}</p>
            <p>{magicProduct.stock}</p>
          </div>
        </section>
      </>
    );
  }
}
