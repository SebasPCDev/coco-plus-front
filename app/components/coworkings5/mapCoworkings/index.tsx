'use client';
import { useCallback, useEffect, useState } from 'react';
import {
  Map,
  MapCameraChangedEvent,
  MapCameraProps,
  Marker,
  InfoWindow,
} from '@vis.gl/react-google-maps';

const INITIAL_CAMERA: MapCameraProps = {
  center: { lat: -17.797610035031738, lng: -63.52392568413111 },
  zoom: 3,
};

const MapCoworking = ({
  coworkings,
  cameraPropsNew,
  FilterMap,
}: {
  coworkings: any;
  cameraPropsNew: any;
  FilterMap: any;
}) => {
  const [markersCoworking, setMarkersCoworking] = useState<any>([]);
  const [cameraProps, setCameraProps] =
    useState<MapCameraProps>(INITIAL_CAMERA);

  useEffect(() => {
    setCameraProps((prevProps) => ({
      ...prevProps,
      ...cameraPropsNew,
    }));
  }, [cameraPropsNew]);

  useEffect(() => {
    console.log(coworkings);
  }, [coworkings]);

  const handleCameraChange = (ev: MapCameraChangedEvent) => {
    FilterMap(ev.detail.bounds);

    setCameraProps(ev.detail);
  };

  const responseMarker = () => {
    if (coworkings.length > 0) {
      const arrayMarkersCoworkings = coworkings.map((coworking: any) => {
        if (coworking.lat && coworking.long) {
          return {
            position: {
              lat: Number(coworking.lat),
              lng: Number(coworking.long),
            },
            title: coworking.name,

            icon: {
              url: '/markerCoco.png',
              // scaledSize: new window.google.maps.Size(35, 50),
            },
          };
        }
      });

      setMarkersCoworking(arrayMarkersCoworkings);
      console.log(arrayMarkersCoworkings);
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
      {markersCoworking.length > 0 &&
        markersCoworking.map((marker: any, index: any) => (
          <Marker
            key={index}
            position={marker.position}
            title={marker.title}
            icon={marker.icon}
          />
        ))}
    </Map>
  );
};

export default MapCoworking;
