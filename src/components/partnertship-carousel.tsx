'use client';

import Autoplay from 'embla-carousel-autoplay';

import { partnerships } from '@/lib/partnership';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { TablerIcon } from './tabler-icon';

const PartnertshipCarousel = () => {
  return (
    <div className="mt-9 hidden lg:flex">
      <Carousel
        className="w-full"
        plugins={[Autoplay({ delay: 5000 })]}
        opts={{ loop: true, align: 'start', watchDrag: false }}>
        <CarouselContent className="-ml-1">
          {partnerships.map((item) => (
            <CarouselItem key={item.name} className="pl-3 md:basis-1/2 lg:basis-auto">
              <div key={item.name} className="flex w-80 min-w-80 items-center gap-6 rounded-xl bg-white/20 p-4">
                <div className="flex size-14 items-center justify-center rounded-lg bg-white/40">
                  <TablerIcon name="IconBrandGithub" className="size-8 stroke-white stroke-2" />
                </div>
                <h5 className="select-none text-2xl font-black text-white">{item.name}</h5>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export { PartnertshipCarousel };
