// FlightSearch.js
import React, { useState } from 'react';
import axios from 'axios';

const FlightSearch = () => {
  const [flightDetails, setFlightDetails] = useState(null);
  const [originAirport, setOriginAirport] = useState('');
  const [destinationAirport, setDestinationAirport] = useState('');
  const apiKey="44d4decc3521a0291aa6c39ac5c7a90c";



//   const searchFlights = async () => {
//     try {
//       const response = await axios.get(
//         `http://api.aviationstack.com/v1/flights?access_key=${apiKey}=London&arr_iata=Paris`
//       );

//       setFlightDetails(response.data.data[0]);
//     } catch (error) {
//       console.error('Error searching for flights:', error);
//     }
//   };

  return (
    <div>
       
      {/* <h2>Flight Search</h2>
      <label>Origin Airport (IATA code):</label>
      <input
        type="text"
        value={originAirport}
        onChange={(e) => setOriginAirport(e.target.value)}
      />
      <label>Destination Airport (IATA code):</label>
      <input
        type="text"
        value={destinationAirport}
        onChange={(e) => setDestinationAirport(e.target.value)}
      />
      <button onClick={searchFlights}>Search Flights</button> */}

      {/* {flightDetails && (
        <div>
          <h3>Flight Details</h3>
          <p>Flight Number: {flightDetails.flight.iata}</p>
          <p>Departure Airport: {flightDetails.departure.airport}</p>
          <p>Arrival Airport: {flightDetails.arrival.airport}</p>
        </div>
      )} */}
    </div>
  );
};

export default FlightSearch;
