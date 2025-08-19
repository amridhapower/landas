import { type FC, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderNavigation from '@/shared/components/atoms/sliderNavigation/SliderNavigation';

interface GalleryViewProps {
  images: string[];
  index: number;
  setIndex: (i: number) => void;
}

const GalleryView: FC<GalleryViewProps> = ({ images, index, setIndex }) => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '0px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 8500,
    speed: 300,
    dots: false,
    beforeChange: (_current: number, next: number) => setIndex(next),
    responsive: [
      { breakpoint: 1170, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 0, settings: { slidesToShow: 1 } },
    ],
  };

  const goToSlide = (i: number) => {
    sliderRef.current?.slickGoTo(i);
    setIndex(i);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <Slider ref={sliderRef} {...settings} className="w-full">
        {images.map((src, i) => (
          <div key={i} className="flex justify-center">
            <img
              src={src}
              alt={`Slide ${i}`}
              className={`cursor-pointer transition-all duration-300 object-cover
                ${i === index ? 'w-[500px] h-[604px] rounded-br-[100px] shadow-lg' : 'w-[200px] h-[460px] opacity-70'}`}
              onClick={() => goToSlide(i)}
            />
          </div>
        ))}
      </Slider>
      <SliderNavigation images={images} index={index} setIndex={goToSlide} />
    </div>
  );
};

export default GalleryView;
