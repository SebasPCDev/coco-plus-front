import CardWrapper from '../ui/dashboard/cards';
import SideNav from '../ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="md-overflow-hidden flex h-screen flex-col md:flex-row">
      <div className="w-full flex-none md:w-96">
        <SideNav />
      </div>

      <div className="p6 flex grow md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
