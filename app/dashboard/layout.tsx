import SideNav from '../components/Sidebar/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="md-overflow-hidden flex h-screen flex-col md:flex-row">
      <div className="w-full flex-none md:w-96">
        <SideNav />
      </div>

      <div className="p6 flex grow md:p-12">{children}</div>
    </div>
  );
}
