'use client';
import { useCallback, useEffect, useState } from 'react';
import {
  Map,
  MapCameraChangedEvent,
  MapCameraProps,
  Marker,
} from '@vis.gl/react-google-maps';
import useCoworkings from '../useCoworkings';
import { geocodeAddress } from '@/utils/geocodeAdressAndReverse';

const INITIAL_CAMERA: MapCameraProps = {
  center: { lat: 29.5, lng: -81.2 },
  zoom: 8,
};

const MapCoworking = () => {
  // const [location, setLocation] = useState<any>(INITIAL_CAMERA);

  // const [cameraProps, setCameraProps] =
  //   useState<MapCameraProps>(INITIAL_CAMERA);
   const { coworkings,filter } =
     useCoworkings();
  useEffect(() => {
    console.log(
      `probando si recivo filter ${filter.city}, ${filter.state}, ${filter.country}`,
    );
  }, [filter]);

  // const handleCameraChange = (ev: MapCameraChangedEvent) => {
  //   setCameraProps(ev.detail);
  //   console.log(ev);
  // };
  // const responseCenter = async () => {
  //   const centerMap = await geocodeAddress(
  //     `${filter.city}, ${filter.state}, ${filter.country}`
  //   );
  // };
  // useEffect(() => {
  //   console.log(filter);

  // }, [filter]);

  // return (
  //   <Map
  //     {...cameraProps}
  //     onCameraChanged={handleCameraChange}
  //     style={{ width: '100%', height: '500px' }}
  //   >
  //     <Marker position={location} />
  //   </Map>
  // );
};

export default MapCoworking;
