import { useState, useEffect, useCallback, type FC, type ReactNode } from 'react';

interface ImageSliderRenderProps {
  images: string[];
  index: number;
  setIndex: (i: number) => void;
}

interface ImageSliderProps {
  images: string[];
  autoSlide?: boolean;
  interval?: number;
  children: (props: ImageSliderRenderProps) => ReactNode;
}

const ImageSlider: FC<ImageSliderProps> = ({
  images,
  autoSlide = true,
  interval = 3000,
  children,
}) => {
  const [index, setIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, [images]);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, interval);
    return () => clearInterval(slideInterval);
  }, [nextSlide, autoSlide, interval]);

  return <>{children({ images, index, setIndex })}</>;
};

export default ImageSlider;
