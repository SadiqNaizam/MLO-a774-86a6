import React from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'; // Autoplay plugin
import { Card, CardContent } from "@/components/ui/card"; // For styling slide items
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CarouselProps {
  slides: { id: string | number; content: React.ReactNode }[];
  options?: EmblaOptionsType;
  showArrows?: boolean;
  enableAutoplay?: boolean;
  autoplayOptions?: Parameters<typeof Autoplay>[0];
}

const Carousel: React.FC<CarouselProps> = ({
  slides,
  options = { loop: true },
  showArrows = true,
  enableAutoplay = true,
  autoplayOptions = { delay: 4000, stopOnInteraction: false },
}) => {
  const plugins = enableAutoplay ? [Autoplay(autoplayOptions)] : [];
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);

  console.log("Rendering Carousel with", slides.length, "slides. Autoplay enabled:", enableAutoplay);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (!slides || slides.length === 0) {
    return <div className="text-center p-4">No slides to display.</div>;
  }

  return (
    <div className="relative">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide) => (
            <div className="embla__slide flex-[0_0_100%] min-w-0" key={slide.id}>
              {/* Example: Wrap slide content in shadcn Card for consistent styling */}
              {/* You might want to pass Card props or make this more flexible */}
              <Card className="m-1 sm:m-2 md:m-4 h-full">
                <CardContent className="flex h-full items-center justify-center p-6">
                  {slide.content}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      {showArrows && emblaApi && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full h-8 w-8 sm:h-10 sm:w-10"
            onClick={scrollPrev}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full h-8 w-8 sm:h-10 sm:w-10"
            onClick={scrollNext}
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </>
      )}
      {/* Consider adding dot navigation if needed */}
    </div>
  );
};
export default Carousel;