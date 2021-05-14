import Geocoder from 'react-native-geocoder';
import Geolocation from '@react-native-community/geolocation';

export const getDriection = (lat, lng, setFunction) => {
    Geocoder.geocodePosition({ lat: lat, lng: lng })
        .then(res => {
            console.log(res);
            setFunction(res[0].formattedAddress)
        })
        .catch(err => console.log(err))
  }

export const currentPosition = (lat, lng, setFunction) => {
    Geolocation.getCurrentPosition(info => setFunction({
        region: {
            latitude: info.coords.latitude,
            longitude: info.coords.longitude,
            latitudeDelta: lat,
            longitudeDelta: lng,
        }
    }))
}