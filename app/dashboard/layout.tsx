import SideNav from '../components/Sidebar/sidenav';
import NavbarDashboard from '../components/navbarDashboard';
import { MyCoworkingProvider } from '@/app/components/myCoworkigs/myCoworkingConstext';
import { getSession } from '../lib/session';
import { UserSession } from '../lib/definitions';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  const user = session?.user as UserSession;
  return (
    <MyCoworkingProvider>
      <div className="md-overflow-hidden flex h-screen flex-col md:flex-row">
        <div className="w-full flex-none md:w-[13rem]">
          <SideNav />
        </div>
        <div className="grow md:p-4">
          <NavbarDashboard user={user} />
          {children}
        </div>
      </div>
    </MyCoworkingProvider>
  );
}
