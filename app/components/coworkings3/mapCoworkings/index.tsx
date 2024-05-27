'use client';
import { useCallback, useEffect, useState } from 'react';
import {
  Map,
  MapCameraChangedEvent,
  MapCameraProps,
  Marker,
} from '@vis.gl/react-google-maps';

const INITIAL_CAMERA: MapCameraProps = {
  center: { lat: -17.797610035031738, lng: -63.52392568413111 },
  zoom: 3,
};

const MapCoworking = ({ coworkings, cameraPropsNew }) => {
  const [markersCoworking, setMarkersCoworking] = useState<any>([]);
  const [cameraProps, setCameraProps] =
    useState<MapCameraProps>(INITIAL_CAMERA);

  useEffect(() => {
    setCameraProps((prevProps) => ({
      ...prevProps,
      ...cameraPropsNew,
    }));
  }, [cameraPropsNew]);

  const handleCameraChange = (ev: MapCameraChangedEvent) => {
    setCameraProps(ev.detail);
  };

  const responseMarker = async () => {
    if (coworkings) {
      const arrayMarkersCoworkings = coworkings.map(async (coworking) => {
        if (coworking.lat && coworking.long) {
          return { lat: Number(coworking.lat), lng: Number(coworking.long) };
        }
      });

      setMarkersCoworking(await Promise.all(arrayMarkersCoworkings));
    }
  };

  useEffect(() => {
    responseMarker();
  }, [coworkings]);

  return (
    <Map
      {...cameraProps}
      onCameraChanged={handleCameraChange}
      style={{ width: '100%', height: '500px' }}
    >
      {markersCoworking &&
        markersCoworking.map((marker, index) => (
          <Marker key={index} position={marker} />
        ))}
    </Map>
  );
};

export default MapCoworking;
