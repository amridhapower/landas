import Button from '@/shared/components/atoms/button/Button.tsx';

const TopNavButtonContent = () => (
  <div className="flex justify-between w-full lg:px-2 2xl:px-15">
    <Button className="text-white" size="md" variant="outline">
      SS
    </Button>
    <Button className="text-white" size="md" variant="outline">
      FW
    </Button>
    <Button className="text-white" size="md" variant="outline">
      PANTS
    </Button>
    <Button className="text-white" size="md" variant="outline">
      T-Shirt
    </Button>
    <Button className="text-white" size="md" variant="outline">
      SALE
    </Button>
    <Button className="text-white" size="md" variant="outline">
      COLLECTION
    </Button>
    <Button className="text-white" size="md" variant="outline">
      COMMUNITY
    </Button>
  </div>
);

export default TopNavButtonContent;
