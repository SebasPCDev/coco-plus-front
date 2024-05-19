import SideNav from '../components/Sidebar/sidenav';
import NavbarDashboard from '../components/navbarDashboard';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="md-overflow-hidden flex h-screen flex-col md:flex-row">
      <div className="w-full flex-none md:w-96">
        <SideNav />
      </div>
      <div className="grow md:p-3">
        <NavbarDashboard />
        {children}
      </div>
    </div>
  );
}
