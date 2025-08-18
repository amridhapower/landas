import landasLogo from '@/assets/logos/landas.svg';
import basketIcon from '@/assets/icons/Basket_alt_3_fill.svg';
import userFillIcon from '@/assets/icons/User_fill.svg';
import { Search } from 'lucide-react';
import TopNavButtonContent from '@/shared/components/molecules/topNavButtonContent/TopNavButtonContent.tsx';
import Button from '@/shared/components/atoms/button/Button.tsx';

const TopNav = () => {
  return (
    <div className="flex bg-black text-white lg:px-2 xl:px-25 2xl:px-[137px] justify-between">
      <div className="h-21 flex items-center">
        <img className="w-[130px] h-6" src={landasLogo} alt="logo" />
      </div>
      <TopNavButtonContent />
      <div className="flex justify-center items-center min-w-49">
        <img src={basketIcon} alt="basket icon" />
        <img src={userFillIcon} alt="user fill icon" />
        <Search size={28} />
        <Button className="text-white" size="sm" variant="outline">
          로그아웃
        </Button>
      </div>
    </div>
  );
};

export default TopNav;
