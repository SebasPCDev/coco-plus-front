'use client';
import roles from '@/utils/arrayMenu/roles';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname();
  const role = pathname.split('/')[2];
  const arrayNavLinks = roles[role];

  return (
    <>
      {arrayNavLinks.map((link) => {
        const LinkIcon = link?.icon;
        return (
          <Link
            key={link?.name}
            href={link?.href}
            className={`mb-3 flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium transition ease-in hover:bg-custom-primary hover:text-custom-secondary md:flex-none md:justify-start md:p-2 md:px-3 
            
            ${
              pathname === link?.href
                ? ' !bg-custom-primary !text-custom-secondary'
                : ''
            }`}
          >
            <div className="w-8">
              <LinkIcon />
            </div>
            <p className="hidden md:block">{link?.name}</p>
          </Link>
        );
      })}
    </>
  );
}
