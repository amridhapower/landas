import TopNav from '@/shared/components/topNav/TopNav.tsx';
import ImageSlider from '@/shared/components/atoms/imageSlider/ImageSlider.tsx';
import ImageGridContent from '@/shared/components/molecules/imageGridContent/ImageGridContent.tsx';
import CarouselView from '@/shared/components/molecules/carouselView/CarouselView.tsx';

import firstImage from '@/assets/images/Carousel Main_1.png';
import secondImage from '@/assets/images/Carousel Main_2.png';
import thirdImage from '@/assets/images/Carousel Main_3.png';
import fourthImage from '@/assets/images/Carousel Main_4.png';
import GalleryView from '@/shared/components/molecules/galleryView/GalleryView.tsx';
const Home = () => {
  const images = [firstImage, secondImage, thirdImage, fourthImage];
  const carouselImages = [
    'https://picsum.photos/id/1018/800/400',
    'https://picsum.photos/id/1025/800/400',
    'https://picsum.photos/id/1035/800/400',
  ];

  return (
    <div className="w-full">
      <TopNav />
      <ImageSlider images={carouselImages}>
        {({ images, index, setIndex }) => (
          <CarouselView images={images} index={index} setIndex={setIndex} />
        )}
      </ImageSlider>
      <div className="flex flex-col px-4 md:px-[15%] gap-15 md:gap-30">
        <ImageSlider images={images} autoSlide={false}>
          {({ images, index, setIndex }) => (
            <GalleryView images={images} index={index} setIndex={setIndex} />
          )}
        </ImageSlider>
        <ImageGridContent />
        <ImageGridContent />
      </div>
    </div>
  );
};

export default Home;
