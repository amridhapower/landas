import { type FC } from 'react';

interface SliderNavigationProps {
  images: string[];
  index: number;
  setIndex?: (i: number) => void;
}

const SliderNavigation: FC<SliderNavigationProps> = ({ images, index, setIndex }) => {
  return (
    <div className="flex w-[250px] items-center">
      {images.map((_, i) => (
        <div
          key={i}
          onClick={() => setIndex?.(i)}
          className={`flex-1 transition-all duration-500 cursor-pointer ${
            i === index ? 'h-2 bg-radial-gradient' : 'h-1 bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

export default SliderNavigation;
