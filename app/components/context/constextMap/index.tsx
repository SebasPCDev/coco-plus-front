'use client';

import { APIProvider, Map } from '@vis.gl/react-google-maps';
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? 'YOUR_API_KEY';

const MapProvider = ({ children }: { children: React.ReactNode }) => (
  <APIProvider apiKey={API_KEY}>{children}</APIProvider>
);

export default MapProvider;
