// FlightDetails.js
import React, { useState } from 'react';
import styles from './flight-details.module.css';
import cardStyle from '../Dashboard/dashboard.module.css'
import homePageStyle from '../home-page.module.css'
import style from '../travel-planner/travel-planner.module.css'
interface FlightDetailsProps {
  isChecked: boolean;
  selectedDate: Date | null;
  formData: any;
}
const flightData = [
  {
    flightNumber: '213242',
    flightName:'Vistara',
    cost: '£150',
    flightTime:'3hr'
  },
  {
    flightNumber: '423167',
    flightName:'KLM',
    cost: '£170',
    flightTime:'5hr'
  },
  {
    flightNumber: '213441',
    flightName:'Ryanair',
    cost: '£130',
    flightTime:'2hr'
  },
  {
    flightNumber: '123278',
    flightName:'Emirates',
    cost: '£171',
    flightTime:'8hr'
  },
];

const FlightDetails: React.FC<FlightDetailsProps> = ({ isChecked, selectedDate, formData }) => {
  const [selectedFlightNumber, setSelectedFlightNumber] = useState('');
  function bookTrip(flightNumber?:string): void {
    if(selectedFlightNumber && selectedFlightNumber !== null)
    window.confirm(`Congratulations! Your flight ${selectedFlightNumber} has been booked.`);
  else
  alert("Please select your flight");
  }

  function handleRadioChange(flightNumber: string): void {
    setSelectedFlightNumber(flightNumber);
  }
  function handleNewJourneySearch(){
    location.reload();
  }
  return (
    <div>
    {flightData.map((flight)=>(
      <React.Fragment key={flight.flightNumber}>
      <div className={`${cardStyle.card} ${styles.flightDetails}`}>
      <div className={styles.flightInfoHeader}>
      <input
            type="radio"
            id={flight.flightNumber}
            name="selectedFlight"
            className={styles.selectFlight}
            onChange={() => handleRadioChange(flight.flightNumber)}
          />Flight Information: {flight.flightNumber}<hr /></div>
        <table>
          <tr>
            <td className={styles.flightDetailsInfo}><strong>Flight Name:</strong> {flight.flightName}</td>
            <td className={styles.flightDetailsInfo}><strong>Dep. Date:</strong> {selectedDate ? selectedDate.toDateString() : 'None'}</td>
          </tr>
          <tr>
          <td className={styles.flightDetailsInfo}><strong>Origin City:</strong> {formData.originCity}</td>
          <td className={styles.flightDetailsInfo}><strong>Destination City:</strong> {formData.destinationCity}</td>
          </tr>
          <p><strong>Flight Time:</strong> {flight.flightTime}</p>
      </table>
      </div>
         {isChecked && (
          <div className={`${cardStyle.card} ${styles.flightDetails}`}>
          <h2 className = {styles.flightInfoHeader}>Return Flight Information: {flight.flightNumber} <hr/></h2>
          <table>
            <tr> <td className={styles.flightDetailsInfo}><strong>Flight Name:</strong>{flight.flightName}</td>
              <td className={styles.flightDetailsInfo}><strong>Dep. Date:</strong> {selectedDate ? selectedDate.toDateString() : 'None'}</td>
            </tr>
            <tr>
            <td className={styles.flightDetailsInfo}><strong>Origin City:</strong> {formData.destinationCity}</td>
            <td className={styles.flightDetailsInfo}><strong>Destination City:</strong> {formData.originCity}</td>
            </tr>
            <p><strong>Flight Time:</strong>{flight.flightTime}</p>
        </table>
        </div>
    )}
     </React.Fragment>
        ))}
        <div className = {`${styles.bookButtonBlock}`}>
        <button onClick={()=>bookTrip()} className = {`${styles.bookButtonStyle} ${homePageStyle.primaryButton}`}>Book your trip</button>
        <button className={`${style.submitButton} ${styles.newJobStyle} ${homePageStyle.primaryButton}`} onClick={handleNewJourneySearch}>New Journey</button>
        </div>
    </div>
  );
};
export default FlightDetails;
