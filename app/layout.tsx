import { UserProvider } from './components/context';
import { montserrat } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={`${montserrat.className} antialiased`}>
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
