'use client'
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation'

export default function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?:string;
}) {
    const pathname = usePathname();
    const isActive = href.startsWith('/') && pathname === href;
  return (
    <Link href={href} 
    className={cn("text-gray-800 hover:text-red-600 transition",
    className,
    isActive && 'text-rose-500'
    )}
    >
      {children}
    </Link>
  );
}
