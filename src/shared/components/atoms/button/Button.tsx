import { type FC, type ReactNode } from 'react';
import classNames from 'classnames';

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'ghost';
  type?: 'button' | 'submit';
  onClick?: () => void;
  children?: ReactNode;
  isDisabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
const Button: FC<ButtonProps> = ({
  type = 'button',
  onClick,
  size = 'lg',
  children,
  isDisabled,
  variant = 'primary',
  className,
}) => {
  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-21 px-4',
    lg: 'h-18 px-5 text-lg',
  }[size];
  const variants = {
    primary: 'bg-radial-gradient text-white hover:opacity-90',
    outline: 'border border-black/15 text-black hover:bg-black/5',
    ghost: 'text-black hover:bg-black/5',
  }[variant];

  return (
    <button
      className={classNames('cursor-pointer rounded-[10px]', sizes, variants, className, {
        '!bg-gray-100 !text-gray-400 pointer-events-none': isDisabled,
      })}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
