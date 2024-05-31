'use client';
import { useEffect, useState } from 'react';
import {
  Map,
  MapCameraChangedEvent,
  MapCameraProps,
  Marker,
  InfoWindow,
} from '@vis.gl/react-google-maps';
import Link from 'next/link';

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
  const [selectMarker, setSelectMarker] = useState<any>(null);

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
    if (coworkings) {
      const arrayMarkersCoworkings = coworkings.map((coworking: any) => {
        if (coworking.lat && coworking.long) {
          return {
            position: {
              lat: Number(coworking.lat),
              lng: Number(coworking.long),
            },
            name: coworking.name,
            id: coworking.id,
            open: coworking.open,
            close: coworking.close,
            thumbnail: coworking.thumbnail,
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
      {markersCoworking &&
        markersCoworking.map((marker: any, index: any) => (
          <Marker
            key={index}
            position={marker.position}
            onClick={() => setSelectMarker(marker)}
          />
        ))}
      {selectMarker && (
        <InfoWindow
          position={selectMarker.position}
          onCloseClick={() => setSelectMarker(null)}
        >
          <div className="w-56 rounded-lg bg-white">
            <img
              src={selectMarker.thumbnail}
              alt={selectMarker.name}
              className=" w-full rounded-md"
            />
            <h2 className="mb-2 text-xl font-semibold">{selectMarker.name}</h2>
            <p className="mb-2 text-sm text-gray-600">
              <strong>Horario:</strong> {selectMarker.open} -{' '}
              {selectMarker.close}
            </p>
            <Link href={`/coworkings/${selectMarker.id}`} passHref>
              <button className="btn btn-confirm">Ver Detalles</button>
            </Link>
          </div>
        </InfoWindow>
      )}
    </Map>
  );
};

export default MapCoworking;
