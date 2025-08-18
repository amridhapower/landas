import { useState, useEffect, useCallback } from 'react';

const images = [
  'https://picsum.photos/id/1018/800/400',
  'https://picsum.photos/id/1025/800/400',
  'https://picsum.photos/id/1035/800/400',
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-225 overflow-hidden shadow-lg mx-auto">
      <div className="absolute z-10 -top-4 left-0 w-full h-16 bg-gradient-to-b from-black to-transparent pointer-events-none" />

      {/* Gradient shadow bottom */}
      <div className="absolute z-10 top-209 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <div
        className="flex transition-transform duration-700 ease-in-out h-225"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img key={i} src={src} alt={`Slide ${i}`} className="w-full flex-shrink-0 object-cover" />
        ))}
      </div>
      <div className="absolute z-11 top-212 left-1/2 -translate-x-1/2 flex w-[250px] items-end">
        {images.map((_, i) => (
          <div
            key={i}
            className={`flex-1 transition-all duration-500 ${
              i === index ? 'h-2 bg-radial-gradient' : 'h-1 bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
