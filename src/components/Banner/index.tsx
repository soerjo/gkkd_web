'use client'

import { Carousel } from "@material-tailwind/react";

export function CarouselDefault() {
  return (
    <Carousel className="rounded-xl h-auto md:h-full overflow-hidden shadow-md" placeholder={undefined}>
      <img
        src="/images/banner01.png"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="/images/banner02.png"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="/images/banner03.png"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}