'use client';

import { useCallback, useState } from 'react';

import {
  Map,
  MapCameraChangedEvent,
  MapCameraProps,
  InfoWindow,
  AdvancedMarker,
  Pin,
  Marker,
} from '@vis.gl/react-google-maps';

const INITIAL_CAMERA = {
  center: { lat: 29.5, lng: -81.2 },
  zoom: 12,
};

const UpdatedLocationMap = () => {
  const [cameraProps, setCameraProps] =
    useState<MapCameraProps>(INITIAL_CAMERA);
  const handleCameraChange = (ev: MapCameraChangedEvent) => {
    setCameraProps(ev.detail);
    console.log(ev);
  };
  const handleClick = (ev) => {
    console.log(ev);
  };

  return (
    <Map
      {...cameraProps}
      onCameraChanged={handleCameraChange}
      onClick={handleClick}
      style={{ width: '100%', height: '500px' }}
    >
      <Marker position={{ lat: 29.5, lng: -81.2 }} />
      <Marker position={{ lat: 29.4, lng: -81.3 }} />
      <Marker position={{ lat: 29.3, lng: -81.4 }} />
    </Map>
  );
};
export default UpdatedLocationMap;
