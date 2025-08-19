import { type FC } from 'react';
import SliderNavigation from '@/shared/components/atoms/sliderNavigation/SliderNavigation.tsx';

interface CarouselViewProps {
  images: string[];
  index: number;
  setIndex: (i: number) => void;
}

const CarouselView: FC<CarouselViewProps> = ({ images, index }) => {
  return (
    <div className="relative w-full h-225 overflow-hidden shadow-lg mx-auto">
      <div className="absolute z-10 -top-4 left-0 w-full h-16 bg-gradient-to-b from-black to-transparent pointer-events-none" />
      <div className="absolute z-10 top-209 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      <div
        className="flex transition-transform duration-700 ease-in-out h-225"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img key={i} src={src} alt={`Slide ${i}`} className="w-full flex-shrink-0 object-cover" />
        ))}
      </div>
      <div className="relative bottom-10 z-10 flex justify-center">
        <SliderNavigation images={images} index={index} />
      </div>
    </div>
  );
};

export default CarouselView;
