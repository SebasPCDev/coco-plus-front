'use client';
import { useEffect, useState } from 'react';
import {
  Map,
  MapCameraChangedEvent,
  MapCameraProps,
  Marker,
} from '@vis.gl/react-google-maps';
import { geocodeAddress } from '@/utils/geocodeAdressAndReverse';

const INITIAL_CAMERA: MapCameraProps = {
  center: { lat: -17.797610035031738, lng: -63.52392568413111 },
  zoom: 5,
};

const MapSingleItem = ({ item }: { item: any }) => {
  const [markerPosition, setMarkerPosition] = useState(null as any | null);
  const [cameraProps, setCameraProps] =
    useState<MapCameraProps>(INITIAL_CAMERA);

  const handleCameraChange = (ev: MapCameraChangedEvent) => {
    setCameraProps(ev.detail);
  };

  const setMapLocation = async () => {
    if (item && item.country) {
      const location = await geocodeAddress(
        `${item.city || ''}, ${item.state || ''}, ${item.country}`,
      );
      const lat = location[0].geometry.location.lat();
      const lng = location[0].geometry.location.lng();
      setMarkerPosition({ lat: Number(lat), lng: Number(lng) });
      setCameraProps((prevProps) => ({
        ...prevProps,
        center: { lat: Number(lat), lng: Number(lng) },
        zoom: item.city ? 10 : item.state ? 8 : 5,
      }));
    }
  };

  useEffect(() => {
    setMapLocation();
  }, [item]);

  return (
    <Map
      {...cameraProps}
      onCameraChanged={handleCameraChange}
      style={{ width: '100%', height: '500px' }}
    >
      {markerPosition && <Marker position={markerPosition} />}
    </Map>
  );
};

export default MapSingleItem;
