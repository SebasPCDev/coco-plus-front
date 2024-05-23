'use client';

import { useCallback, useEffect, useState } from 'react';
import { useMyCoworkingContext } from '../../myCoworkingConstext';
import {
  Map,
  MapCameraChangedEvent,
  MapCameraProps,
  Marker,
} from '@vis.gl/react-google-maps';

const INITIAL_CAMERA: MapCameraProps = {
  center: { lat: 29.5, lng: -81.2 },
  zoom: 17,
};

const UpdatedLocationMap = () => {
  const { Mycoworking, setMyCoworking } = useMyCoworkingContext();
  const [location, setLocation] = useState<any>({
    lat: Number(Mycoworking.lat),
    lng: Number(Mycoworking.long),
  });

  const [cameraProps, setCameraProps] =
    useState<MapCameraProps>(INITIAL_CAMERA);

  const handleCameraChange = (ev: MapCameraChangedEvent) => {
    setCameraProps(ev.detail);
    console.log(ev);
  };

  useEffect(() => {
    const { lat, long } = Mycoworking;
    console.log(lat, long);

    if (lat && long) {
      setCameraProps((prevProps) => ({
        ...prevProps,
        center: { lat: Number(lat), lng: Number(long) },
      }));

      setLocation({ lat: Number(lat), lng: Number(long) });
    }
  }, [Mycoworking]);

  const handleClick = (ev) => {
    const { lat, lng } = ev.detail.latLng;
    setMyCoworking({ ...Mycoworking, lat: String(lat), long: String(lng)});
    console.log(lat, lng);
  };

  return (
    <Map
      {...cameraProps}
      onCameraChanged={handleCameraChange}
      onClick={handleClick}
      style={{ width: '100%', height: '500px' }}
    >
      <Marker position={location} />
      <Marker position={{ lat: 29.4, lng: -81.3 }} />
      <Marker position={{ lat: 29.3, lng: -81.4 }} />
    </Map>
  );
};

export default UpdatedLocationMap;
