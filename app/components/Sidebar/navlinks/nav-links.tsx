import IUser from '@/utils/types/userResponseInterface';
import { useUserContext } from '../../context';
import roles from '@/utils/arrayMenu/roles';

export default function NavLinks() {
  const { user } = useUserContext();
  const role = user?.role;

  return (
    <>
      {user &&
        roles[role].map((link) => {
          const LinkIcon = link?.icon;
          return (
            <a
              key={link?.name}
              href={link?.href}
              className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3  font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link?.name}</p>
            </a>
          );
        })}
    </>
  );
}
