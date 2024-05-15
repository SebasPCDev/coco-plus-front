'use client';
import { useUserContext } from '../../context';
import roles from '@/utils/arrayMenu/roles';
import { useEffect, useState } from 'react';
import { RoleItem } from '@/utils/types/rolesNavLinkInterface';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';

export default function NavLinks() {
  const pathname = usePathname();
  const [arrayNavLinks, setArrayNavLinks] = useState<RoleItem[]>([]);
  const { user } = useUserContext();

  useEffect(() => {
    if (user?.role) {
      setArrayNavLinks(roles[user.role]);
    }
  }, [user]);

  return (
    <>
      {arrayNavLinks.map((link) => {
        const LinkIcon = link?.icon;
        return (
          <Link
            key={link?.name}
            href={link?.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link?.name}</p>
          </Link>
        );
      })}
    </>
  );
}
