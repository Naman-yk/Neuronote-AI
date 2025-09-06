import React, { ReactNode } from 'react';
import clsx from 'clsx';

type BgGradientProps = {
  children?: ReactNode;
  className?: string;
};

export function BgGradient({ children, className }: BgGradientProps) {
  return (
    <div
      className={clsx(
        'relative w-full bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 px-4 py-3 lg:px-8 lg:py-5',
        'shadow-md rounded-b-2xl',
        className
      )}
    >
      {children}
    </div>
  );
}
