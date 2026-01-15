'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  variant?: 'primary' | 'outline';
  className?: string;
  animated?: boolean;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  animated = false,
  type = 'button',
  href,
}) => {
  const baseClasses = 'px-8 py-4 text-base font-semibold border-none rounded-lg cursor-pointer transition-all duration-300 inline-flex items-center justify-center no-underline tracking-wide';
  
  const variantClasses = {
    primary: 'bg-red-600 text-white shadow-[0_10px_20px_rgba(220,38,38,0.3)] hover:bg-red-700 hover:-translate-y-0.5 hover:shadow-[0_15px_30px_rgba(220,38,38,0.4)]',
    outline: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-black hover:-translate-y-0.5',
  };

  const animatedClasses = animated
    ? 'animate-pulse-custom hover:scale-105 hover:animate-none'
    : '';

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${animatedClasses} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClasses} 
        onClick={onClick as (e?: React.MouseEvent<HTMLAnchorElement>) => void}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      type={type} 
      className={combinedClasses} 
      onClick={onClick as (e?: React.MouseEvent<HTMLButtonElement>) => void}
    >
      {children}
    </button>
  );
};

export default Button;
