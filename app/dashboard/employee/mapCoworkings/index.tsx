'use client';
import { use, useCallback, useEffect, useState } from 'react';
import {
  Map,
  MapCameraChangedEvent,
  MapCameraProps,
  Marker,
} from '@vis.gl/react-google-maps';
import { geocodeAddress } from '@/utils/geocodeAdressAndReverse';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const INITIAL_CAMERA: MapCameraProps = {
  center: { lat: -17.797610035031738, lng: -63.52392568413111 },
  zoom: 3,
};
const MapCoworking = ({
  filter,
  allCoworkings,
}: {
  filter: any;
  allCoworkings: any;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);
  const [data, setData] = useState<any>([{}]);
  const [markersCoworking, setMarkersCoworking] = useState<any>([]);
  const [cameraProps, setCameraProps] =
    useState<MapCameraProps>(INITIAL_CAMERA);

  const handleCameraChange = (ev: MapCameraChangedEvent) => {
    setCameraProps(ev.detail);
  };
  const responseCenter = async () => {
    if (filter.country) {
      const centerMap = await geocodeAddress(
        `${filter.city}, ${filter.state}, ${filter.country}`,
      );
      const lat = await centerMap[0].geometry.location.lat();
      const lng = await centerMap[0].geometry.location.lng();
      if (filter.city) {
        setCameraProps((prevProps) => ({
          ...prevProps,
          center: { lat: Number(lat), lng: Number(lng) },
          zoom: 10,
        }));
      } else if (filter.state) {
        setCameraProps((prevProps) => ({
          ...prevProps,
          center: { lat: Number(lat), lng: Number(lng) },
          zoom: 8,
        }));
      } else if (filter.country) {
        setCameraProps((prevProps) => ({
          ...prevProps,
          center: { lat: Number(lat), lng: Number(lng) },
          zoom: 5,
        }));
      }
    } else {
      setCameraProps(INITIAL_CAMERA);
    }
  };

  const responseMarker = async () => {
    if (allCoworkings) {
      const arrayMarkersCoworkings = allCoworkings.map(
        async (coworking: any) => {
          if (coworking.lat && coworking.long) {
            return { lat: Number(coworking.lat), lng: Number(coworking.long) };
          } else if (coworking.country) {
            const location = await geocodeAddress(
              `${coworking.city}, ${coworking.state}, ${coworking.country}`,
            );
            const lat = await location[0].geometry.location.lat();
            const lng = await location[0].geometry.location.lng();
            return { lat: Number(lat), lng: Number(lng) };
          }
        },
      );

      setMarkersCoworking(await Promise.all(arrayMarkersCoworkings));
    }
  };

  useEffect(() => {
    const timeou = async () => {
      setTimeout(async () => {
        await responseCenter();
        await responseMarker();
      }, 300);
    };
    timeou();
  }, [filter]);

  useEffect(() => {
    params.delete('country');
    params.delete('state');
    params.delete('city');
    params.delete('id');
    replace(`${pathname}?${params.toString()}`);
  }, []);

  return (
    <Map
      {...cameraProps}
      onCameraChanged={handleCameraChange}
      style={{
        width: '100%',
        height: '300px',
      }}
      reuseMaps={true}
    >
      {markersCoworking.length > 0 &&
        markersCoworking.map((marker: any, index: any) => (
          <Marker key={index} position={marker} />
        ))}
    </Map>
  );
};

export default MapCoworking;
