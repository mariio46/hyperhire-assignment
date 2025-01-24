'use client';

import * as React from 'react';

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { HeroCard } from './hero-card';
import { TablerIcon } from './tabler-icon';
import { Button } from './ui/button';

const HeroCardCarousel = () => {
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!carouselApi) {
      return;
    }
  }, [carouselApi]);

  return (
    <>
      <Carousel
        setApi={setCarouselApi}
        className="w-full max-[425px]:max-w-xs min-[425px]:max-w-sm"
        opts={{ loop: true, align: 'center', watchDrag: true }}>
        <CarouselContent className="-ml-1 items-center">
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index} className="basis-auto pl-3">
              <div className="p-1">
                <HeroCard key={index} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          variant="ghost"
          className="hidden text-white hover:bg-accent/40 hover:text-white sm:flex [&_svg]:size-6"
        />
        <CarouselNext
          variant="ghost"
          className="hidden text-white hover:bg-accent/40 hover:text-white sm:flex [&_svg]:size-6"
        />
      </Carousel>
      <div className="mt-2 flex items-center justify-center gap-5 sm:hidden">
        <Button
          className="rounded-full text-white hover:bg-accent/40 hover:text-white sm:flex [&_svg]:size-6"
          variant="ghost"
          size="icon"
          onClick={() => carouselApi?.scrollPrev()}>
          <TablerIcon name="IconChevronLeft" />
        </Button>
        <Button
          className="rounded-full text-white hover:bg-accent/40 hover:text-white sm:flex [&_svg]:size-6"
          variant="ghost"
          size="icon"
          onClick={() => carouselApi?.scrollNext()}>
          <TablerIcon name="IconChevronRight" />
        </Button>
      </div>
    </>
  );
};

export { HeroCardCarousel };
