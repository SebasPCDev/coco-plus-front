import { UserProvider } from './components/context';
import { montserrat } from './ui/fonts';
import MapProvider from './components/context/constextMap';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <link rel="icon" href="markerCoco.png" type="image/x-icon" />
      <UserProvider>
        <MapProvider>
          <body className={`${montserrat.className} antialiased`}>
            {children}
          </body>
        </MapProvider>
      </UserProvider>
    </html>
  );
}
