import SideNav from '../components/Sidebar/sidenav';
import { MyCoworkingProvider } from '@/app/components/myCoworkigs/myCoworkingConstext';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MyCoworkingProvider>
      <div className="md-overflow-hidden flex h-screen flex-col md:flex-row">
        <div className="w-full flex-none md:w-96">
          <SideNav />
        </div>
        <div className="flex grow md:p-3">{children}</div>
      </div>
    </MyCoworkingProvider>
  );
}
