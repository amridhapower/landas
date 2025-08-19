import landasLogo from '@/assets/logos/landas.svg';
import basketIcon from '@/assets/icons/Basket_alt_3_fill.svg';
import userFillIcon from '@/assets/icons/User_fill.svg';
import { Menu, Search } from 'lucide-react';
import TopNavButtonContent from '@/shared/components/molecules/topNavButtonContent/TopNavButtonContent.tsx';
import Button from '@/shared/components/atoms/button/Button.tsx';

const TopNav = () => {
  return (
    <div className="flex bg-black text-white lg:px-2 xl:px-25 2xl:px-[137px] justify-end md:justify-between">
      <div className="h-21 flex items-center">
        <img className="w-[130px] h-6" src={landasLogo} alt="logo" />
      </div>
      <TopNavButtonContent />
      <div className="flex justify-center items-center min-w-49 gap-4">
        <img src={basketIcon} alt="basket icon" />
        <img className="hidden md:block size-7" src={userFillIcon} alt="user fill icon" />
        <Search size={28} className="min-w-7" />
        <Button
          className="text-white hidden md:block break-keep text-[15px]"
          size="sm"
          variant="outline"
        >
          로그아웃
        </Button>
        <Menu className="md:hidden" />
      </div>
    </div>
  );
};

export default TopNav;
