import React, { useState } from 'react';
import style from './dashboard.module.css';
import homePageStyle from '../home-page.module.css'

const Dashboard = () => {
  const tripData = [
    {
      id: 'trip1',
      origin: 'London',
      destination: 'Paris',
      'travel-date': '2025-11-30',
      'arrival-date': '2025-12-01',
    },
    {
    id: 'trip2',
      origin: 'Paris',
      destination: 'London',
      'travel-date': '2025-11-28',
      'arrival-date': '2025-11-20',
    },
    {
      id: 'trip3',
      origin: 'New York',
      destination: 'Tokyo',
      'travel-date': '2025-12-20',
      'arrival-date': '2025-12-22',
    },
    {
        id: 'trip4',
        origin: 'Tokyo',
        destination: 'New York',
        'travel-date': '2025-12-24',
        'arrival-date': '2025-12-26',
      },
  ];
  const [sortByValue, setSortByValue] = useState();
  const [tripDetails,setTripDetails] = useState(tripData);

  function handleSortByValueChange(e:any) {
    setSortByValue(e.target.value);
    let sortedTrips;
    switch (e.target.value) {
      case 'trvlDate':
        sortedTrips = [...tripDetails].sort((a, b) =>
          new Date(a['travel-date']).getTime() - new Date(b['travel-date']).getTime()
        );
        break;
      case 'arvlDate':
        sortedTrips = [...tripDetails].sort((a, b) =>
          new Date(a['arrival-date']).getTime() - new Date(b['arrival-date']).getTime()
        );
        break;
      case 'destination':
        sortedTrips = [...tripDetails].sort((a, b) => a.destination.localeCompare(b.destination));
        break;
      default:
        sortedTrips = tripDetails;
    }

    setTripDetails(sortedTrips);
  }

  return (
    <div className={homePageStyle.container}>
    <h1 className={homePageStyle.headerMsg}>
        Welcome to My Trip Planner, here are your upcoming trips
    </h1>
    <div className={style.container}>
      <div className={style.sortBYContainer}>
      <div className={style.sortBY}> Sort By:</div>
      <select className={style.sortBYOptions} value={sortByValue} onChange={handleSortByValueChange}>
        <option value="trvlDate">Travel Date</option>
        <option value="arvlDate">Arrival Date</option>
        <option value="destination">Destination</option>
      </select>
      </div>
    {tripDetails.map((trip) => (
    <div key = {trip.id} className={style.card}>
      <table className={style.destinationTable}>
        <thead className={style.destinationTableHead}>
          <tr>
            <th>Origin</th>
            <th>Destination</th>
            <th>Travel Date</th>
            <th>Arrival Date</th>
          </tr>
        </thead>
        <tbody>
            <tr className={style.destinationTableRow} key={trip.id}>
              <td>{trip.origin}</td>
              <td>{trip.destination}</td>
              <td>{trip['travel-date']}</td>
              <td>{trip['arrival-date']}</td>
            </tr>
        </tbody>
      </table>
      </div>
      ))}
      </div>
    </div>
  );
};

export default Dashboard;
