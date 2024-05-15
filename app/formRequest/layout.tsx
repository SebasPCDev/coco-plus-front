import Header from '../components/header';

export default function FormsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}
