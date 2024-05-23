import loader from '@/app/components/louderGoogleMaps';

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
        console.log(
          'imprimeiendo desde geocoding',
          results[0].geometry.location.lat(),
          results[0].geometry.location.lng(),
        );
      } else {
        reject(
          `Geocode was not successful for the following reason: ${status}`,
        );
      }
    });
  });
};


export const reverseGeocode = async (lat: number, lng: number) => {
  await loader.load();
  const geocoder = new google.maps.Geocoder();
  const latlng = { lat, lng };
  return new Promise<google.maps.GeocoderResult[]>((resolve, reject) => {
    geocoder.geocode({ location: latlng }, (results, status) => {
      if (status === 'OK') {
        resolve(results);
      } else {
        reject(
          `Reverse geocode was not successful for the following reason: ${status}`,
        );
      }
    });
  });
};
