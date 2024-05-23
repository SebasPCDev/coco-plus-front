import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  version: 'weekly',
  libraries: ['places'],
});

export const geocodeAddress = async (
  address: string,
): Promise<google.maps.GeocoderResult[]> => {
  await loader.load();
  const geocoder = new google.maps.Geocoder();
  return new Promise<google.maps.GeocoderResult[]>((resolve, reject) => {
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK' && results !== null) {
        // Asegurarse de que results no sea null
        resolve(results);
        console.log(results);
      } else {
        reject(
          `Geocode was not successful for the following reason: ${status}`,
        );
      }
    });
  });
};
