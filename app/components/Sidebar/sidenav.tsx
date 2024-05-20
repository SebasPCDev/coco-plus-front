import Link from 'next/link';
import NavLinks from './navlinks/nav-links';
import Logout from '../logout';
import CocoLogo from '../Logo/coco-logo';

export default function SideNav() {
  return (
    <div className="flex flex-col items-center justify-center px-3 py-4 md:fixed md:h-full md:w-56 md:px-2">
      <Link
        className="mb-2 hidden w-full rounded-md bg-custom-fourth p-4 md:flex md:h-28 md:items-center md:justify-center"
        href="/"
      >
        <CocoLogo />
      </Link>
      <div className="flex w-2/3 flex-row space-x-1  md:w-full md:grow md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <Logout />
        </form>
      </div>
    </div>
  );
}
