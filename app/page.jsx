import { ScreenSection } from "@/components/base/Sections";
// import BoxSection from "./(pages)/index/components/sections/BoxSection";
import BoxSection from "@/index/BoxSection";
import { auth } from "@clerk/nextjs/server";

export default async function HomePage() {
  const userId = await auth();
  console.log(userId)
  return (
    <>
      <ScreenSection className="bg-orange-800">
        <h1 className="text-7xl">Main page</h1>
      </ScreenSection>
      <BoxSection />
    </>
  );
}
