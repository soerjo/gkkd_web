import { CarouselDefault } from "@/components/Banner";
import Information from "@/components/Information";
import News from "@/components/News";
import VisionAndMission from "@/components/VisiAndMission";



export default function Home() {
  return (
    <div className="bg-gray-100/60 container mx-auto max-w-7xl">
      <div className="flex flex-col md:grid grid-cols-3 grid-rows-1 gap-4 p-4 md:max-h-[500px]">
        <div className="md:col-span-2">
          <CarouselDefault />
        </div>
        <div className="md:col-span-1">
          <News />
        </div>
      </div>
      <div className="overflow-hidden rounded-xl mx-4 shadow-md">
        <VisionAndMission />
      </div>
      <div className="overflow-hidden rounded-xl m-4 shadow-md">
        <Information />
      </div>
    </div>
  );
}
