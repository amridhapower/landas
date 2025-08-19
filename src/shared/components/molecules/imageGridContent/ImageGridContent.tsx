import clothImage from '@/assets/images/cloth.svg';
import dotsIcon from '@/assets/icons/dots.svg';

const ImageCard = () => (
  <div className="flex flex-col gap-4">
    <img src={clothImage} alt="cloth image" />
    <div className="pl-4 flex flex-col gap-4 md:gap-4">
      <img src={dotsIcon} alt="dots" />
      <div>
        <span className="line-clamp-1 font-medium">상품명이 노출 됩니다.상품명이 노출 됩니...</span>
        <span className="font-3 md:font-4 text-gray-500">{`{브랜드명} 그룹코드-색상명`}</span>
      </div>
    </div>
  </div>
);
const ImageGridContent = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <span className="font-semibold text-[22px] leading-[34px]">
          상품진열이 타이틀이 들어갑니다.
        </span>
        <span className="text-[18px] leading-[150%]">
          부타이틀이 필요할 경우 텍스트가 들어갑니다.
        </span>
      </div>
      <div className="grid gap-2 md:gap-4 grid-cols-[repeat(auto-fit,minmax(164px,1fr))] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
    </div>
  );
};

export default ImageGridContent;
