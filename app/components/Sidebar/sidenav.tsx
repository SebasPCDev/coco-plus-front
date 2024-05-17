import Link from 'next/link';
import NavLinks from './navlinks/nav-links';
import Logout from '../logout';
import CocoLogo from '../Logo/coco-logo';

export default function SideNav() {
  return (
    <div className="fixed flex h-full flex-col justify-center px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 w-full rounded-md bg-custom-fourth p-4 md:h-40"
        href="/"
      >
        <CocoLogo />
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <Logout />
        </form>
      </div>
    </div>
  );
}
