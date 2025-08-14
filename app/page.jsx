import { ScreenSection } from "@/components/base/Sections";
import BoxSection from "@/index/BoxSection";

export default function HomePage() {
  return (
    <>
      <ScreenSection className="bg-orange-800">
        <h1 className="text-7xl">Main page</h1>
      </ScreenSection>
      <BoxSection />
    </>
  );
}
