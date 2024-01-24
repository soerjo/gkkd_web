import React from 'react'
import { CarouselDefault } from "@/components/Banner";
import Information from "@/components/Information";
import News from "@/components/News";
import VisionAndMission from "@/components/VisiAndMission";
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'



export default function Home() {
  return (
    <main className='min-h-screen bg-gray-100/60'>
      <Navbar />
      <div className=" container mx-auto">
        <div className="flex flex-col xl:grid grid-cols-3 grid-rows-1 gap-4 p-4 xl:max-h-[500px]">
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
      <Footer />
    </main>
  );
}
