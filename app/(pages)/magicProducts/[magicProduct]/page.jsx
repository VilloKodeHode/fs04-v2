import DynamicPageWithApiFetch from "@/components/organism/DynamicPageWithApiFetch";

export default async function MagicProductPage({ params }) {
  const param = await params;

  return (
    <DynamicPageWithApiFetch
      endpoint="magicProducts"
      value="magicProduct"
      param={param}
    />
  );
}
