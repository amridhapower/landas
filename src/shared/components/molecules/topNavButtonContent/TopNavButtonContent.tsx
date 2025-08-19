import Button from '@/shared/components/atoms/button/Button.tsx';

const navItems = ['SS', 'FW', 'PANTS', 'T-Shirt', 'SALE', 'COLLECTION', 'COMMUNITY'];

const TopNavButtonContent = () => (
  <div className="hidden w-full justify-between md:flex lg:px-2 2xl:px-15">
    {navItems.map((label) => (
      <Button key={label} className="text-white" size="md" variant="outline">
        {label}
      </Button>
    ))}
  </div>
);

export default TopNavButtonContent;
