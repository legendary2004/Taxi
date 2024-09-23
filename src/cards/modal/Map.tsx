import React, { useState, useEffect, useRef, FormEvent, useContext } from 'react';
import { createRoot } from 'react-dom/client';
import {
  APIProvider,
  ControlPosition,
  MapControl,
  AdvancedMarker,
  Map,
  useMap,
  useMapsLibrary,
  useAdvancedMarkerRef,
  AdvancedMarkerRef
} from '@vis.gl/react-google-maps';
import { DistanceMatrixService } from '@react-google-maps/api';
import BookingInput from '../../components/inputs/BookingInput';
import { bookingInputClasses } from '../../components/variables/bookingInputClass';
import PhoneBooking from '../../components/inputs/PhoneBooking';
import AuthButton from '../../components/buttons/AuthButton';
import { bookingObj, handleAuthChange } from '../../components/variables/auth';
import DateTime from '../../components/inputs/DateTime';
import { BookingContext } from '../../contexts/BookingContext';
import IsRegisteredModal from '../../components/modals/IsRegisteredModal';

const API_KEY =
  "AIzaSyCQFXk3Q-96H4T3lu9k8QHEcaAZ0bbp4tk";

const MapCard = () => {
  const bookingContext = useContext(BookingContext)
  const [directions, setDirections] = useState<any>()
  const [center, setCenter] = useState({lat: 0, lng: 0})
  const [origin, setOrigin] =
    useState<google.maps.places.PlaceResult | null>(null);
  const [destination, setDestination] =
    useState<google.maps.places.PlaceResult | null>(null);
  const [originMarkerRef, originMarker] = useAdvancedMarkerRef();
  const [destinationMarkerRef, destinationMarker] = useAdvancedMarkerRef();
  const [formProp, setFormProp] = useState(bookingObj)
  const [msg, setMsg] = useState("")

  function showDirections() {
    console.log(origin)
    console.log(destination)
    setDirections(<Directions origin={origin?.formatted_address} destination={destination?.formatted_address}/>)
  }

  function submitBooking(e: FormEvent) {
    e.preventDefault()
    bookingContext.confirmBooking(formProp.email, formProp.phone, formProp.date, formProp.time, origin?.name, destination?.name)
    setMsg(bookingContext.msg)
  } 
  
  return (
    <APIProvider
      apiKey={API_KEY}
      solutionChannel='GMP_devsite_samples_v3_rgmautocomplete'>
        <form onSubmit={(e: FormEvent) => submitBooking(e)} className="grid gap-y-3 sm:grid-cols-2 place-items-center sm:gap-x-3">
          <BookingInput placeholder='Enter your email' icon label="Email" id='email' type='email' value={formProp.email} isRequired={true} handleChange={(e: FormEvent<HTMLInputElement>) => handleAuthChange(e, setFormProp)}/>
          <PhoneBooking placeholder='1234567890' icon label="Phone number" id='phone' type='tel' value={formProp.phone} isRequired={true} handleChange={(e: FormEvent<HTMLInputElement>) => handleAuthChange(e, setFormProp)}/>
          <DateTime dateId='date' timeId='time' dateValue={formProp.date} timeValue={formProp.time} handleChange={(e: FormEvent<HTMLInputElement>) => handleAuthChange(e, setFormProp)}/>
          <div className='w-full'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter pickup location</label>
            <PlaceAutocomplete onPlaceSelect={setOrigin} />
          </div>
          <div className='w-full'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter dropff location</label>
            <PlaceAutocomplete onPlaceSelect={setDestination} />
          </div>
          <div className='sm:col-span-2 sm:w-1/2 sm:mx-auto'>
            <AuthButton label='Confirm booking' />
          </div>
        </form>
        <div className='mt-3 sm:w-1/2 sm:mx-auto'>
          <button onClick={showDirections} type="button" className="w-full py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 duration-300">Route</button>
        </div>
      <Map
        className='max-w-screen-xl h-[400px] mx-auto'
        mapId={'bf51a910020fa25a'}
        defaultZoom={3}
        defaultCenter={center}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      >
        <AdvancedMarker ref={originMarkerRef} position={null} />
        <AdvancedMarker ref={destinationMarkerRef} position={null} />
      </Map>
      <MapControl position={ControlPosition.TOP}>
      </MapControl>
      <MapHandler place={origin} marker={originMarker} />
      <MapHandler place={destination} marker={destinationMarker} />
      {directions}
      {msg && <IsRegisteredModal message={msg} closeModal={() => setMsg("")} />}
    </APIProvider>
  );
};

interface MapHandlerProps {
  place: google.maps.places.PlaceResult | null;
  marker: google.maps.marker.AdvancedMarkerElement | null;
}

const MapHandler = ({ place, marker }: MapHandlerProps) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !place || !marker) return;

    if (place.geometry?.viewport) {
      map.fitBounds(place.geometry?.viewport);
    }
    marker.position = place.geometry?.location;
  }, [map, place, marker]);

  return null;
};

interface PlaceAutocompleteProps {
  onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
}

const PlaceAutocomplete = ({ onPlaceSelect }: PlaceAutocompleteProps) => {
  const [placeAutocomplete, setPlaceAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const places = useMapsLibrary('places');

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const options = {
      fields: ['geometry', 'name', 'formatted_address']
    };

    setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
  }, [places]);

  useEffect(() => {
    if (!placeAutocomplete) return;

    placeAutocomplete.addListener('place_changed', () => {
      onPlaceSelect(placeAutocomplete.getPlace());
    });
  }, [onPlaceSelect, placeAutocomplete]);

  return (
    <div className="w-full h-full">
      <input ref={inputRef} className={bookingInputClasses} required/>
    </div>
  );
};

interface directions {
  origin: any;
  destination: any
}

function Directions(props: directions) {
  const map = useMap();
  const routesLibrary = useMapsLibrary('routes');
  const [directionsService, setDirectionsService] =
    useState<google.maps.DirectionsService>();
  const [directionsRenderer, setDirectionsRenderer] =
    useState<google.maps.DirectionsRenderer>();
  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
  const [routeIndex, setRouteIndex] = useState(0);
  const selected = routes[routeIndex];
  const leg = selected?.legs[0];

  // Initialize directions service and renderer
  useEffect(() => {
    if (!routesLibrary || !map) return;
    setDirectionsService(new routesLibrary.DirectionsService());
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({map}));
  }, [props.origin, props.destination, routesLibrary, map]);

  // Use directions service
  useEffect(() => {
    if (!directionsService || !directionsRenderer) return;

    directionsService
      .route({
        origin: props.origin,
        destination: props.destination,
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true
      })
      .then(response => {
        console.log(response)
        directionsRenderer.setDirections(response);
        setRoutes(response.routes);
    }).catch(err => console.log(err.code));

    return () => directionsRenderer.setMap(null);
  }, [directionsService, directionsRenderer]);

  // Update direction route
  useEffect(() => {
    if (!directionsRenderer) return;
    directionsRenderer.setRouteIndex(routeIndex);
  }, [routeIndex, directionsRenderer]);

  if (!leg) return null;

  return (
    <div className='text-gray-900 text-center py-3 dark:text-white'>
      <h2>Selected route: {selected.summary}</h2>
      <p>
        {leg.start_address.split(',')[0]} to {leg.end_address.split(',')[0]}
      </p>
      <p>Distance: {leg.distance?.text}</p>
      <p>Duration: {leg.duration?.text}</p>

      <h2>Other Routes</h2>
      <ul>
        {routes.map((route, index) => (
          <li key={route.summary}>
            <button className='hover:underline underline-offset-4' onClick={() => setRouteIndex(index)}>
              {route.summary}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MapCard