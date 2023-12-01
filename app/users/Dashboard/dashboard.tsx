import React from 'react';
import style from './dashboard.module.css';
import homePageStyle from '../home-page.module.css'

const Dashboard = () => {
  const tripData = [
    {
      id: 'trip1',
      origin: 'London',
      destination: 'Paris',
      'travel-date': '30/11/2025',
      'arrival-date': '01/12/2025',
    },
    {
    id: 'trip2',
      origin: 'Paris',
      destination: 'London',
      'travel-date': '30/11/2025',
      'arrival-date': '01/12/2025',
    },
    {
      id: 'trip3',
      origin: 'New York',
      destination: 'Tokyo',
      'travel-date': '01/12/2025',
      'arrival-date': '05/12/2025',
    },
    {
        id: 'trip4',
        origin: 'Tokyo',
        destination: 'New York',
        'travel-date': '06/12/2025',
        'arrival-date': '11/12/2025',
      },
  ];

  return (
    <div className={homePageStyle.container}>
    <h1 className={homePageStyle.headerMsg}>
        Welcome to My Trip Planner, here are your upcoming trips
    </h1>
    <div className={style.container}>
    {tripData.map((trip) => (
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
          {/* {tripData.map((trip) => ( */}
            <tr className={style.destinationTableRow} key={trip.id}>
              <td>{trip.origin}</td>
              <td>{trip.destination}</td>
              <td>{trip['travel-date']}</td>
              <td>{trip['arrival-date']}</td>
            </tr>
          {/* ))} */}
        </tbody>
      </table>
      </div>
      ))}
      </div>
    </div>
  );
};

export default Dashboard;
