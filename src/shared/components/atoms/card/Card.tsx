import { type FC, type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}
const Card: FC<CardProps> = ({ children }) => {
  return <div className="flex items-center justify-center bg-white h-full w-full">{children}</div>;
};

export default Card;
