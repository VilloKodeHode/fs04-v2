import { ScreenSection } from "@/components/base/Sections";
import { sanityClient } from "@/lib/sanity";
import Image from "next/image";

export default async function HomePage() {
  const posts = await sanityClient.fetch(
    `*[_type == "post"]{
    title,
    slug,
    image {
    asset -> {
      url
    }
    },
  _id,
    body
}`,
    {
      revalidate: 15,
    }
  );

  console.log(posts);

  return (
    <>
      <ScreenSection className="bg-lime-700">
        <ul>
          {posts.map((post) => (
            <li key={post._id}>
              <p>slug: {post.slug.current}</p>
              <Image
                src={post.image.asset.url}
                alt={post.title}
                height={800}
                width={800}
              />
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </ScreenSection>
    </>
  );
}
