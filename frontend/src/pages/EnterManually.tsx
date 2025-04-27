// src/pages/EnterManually.tsx (or wherever this component lives)

import styles from '../css/FLightInfo.module.css'; // Ensure this path is correct
import NextButton from "../components/NextButton";
import StyledTextInput from '../components/StyledTextInput';
import cloud1 from '../assets/images/cloud5.png'; // Ensure these paths are correct
import cloud2 from '../assets/images/cloud2.png';
import cloud3 from '../assets/images/cloud1.png';
import cloud4 from "../assets/images/cloud4.png";
import cloud5 from "../assets/images/cloud5.png";
import star from "../assets/images/star.png";

import React, { useState, ChangeEvent } from 'react'; // Import ChangeEvent

// Spacer component (assuming it's defined elsewhere or here)
const Spacer = ({ size = "1rem" }: { size?: string }) => {
    return <div style={{ height: size }} />;
};

const EnterManually: React.FC = () => {
    // --- State for Inputs ---
    const [flightNumber, setFlightNumber] = useState('');
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');
    const [date, setDate] = useState('');
    const [depTime, setDepTime] = useState('');
    const [arrTime, setArrTime] = useState('');
    const [airline, setAirline] = useState('');
    const [isUrgent, setIsUrgent] = useState('No'); // State for Urgent dropdown
    const [timeLeeway, setTimeLeeway] = useState(''); // State for Time Leeway input
    // --- End State ---

    // --- Define onChange Handlers ---
    const handleFlightNumberChange = (e: ChangeEvent<HTMLInputElement>) => setFlightNumber(e.target.value);
    const handleDepartureChange = (e: ChangeEvent<HTMLInputElement>) => setDeparture(e.target.value);
    const handleArrivalChange = (e: ChangeEvent<HTMLInputElement>) => setArrival(e.target.value);
    const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => setDate(e.target.value);
    const handleDepTimeChange = (e: ChangeEvent<HTMLInputElement>) => setDepTime(e.target.value);
    const handleArrTimeChange = (e: ChangeEvent<HTMLInputElement>) => setArrTime(e.target.value);
    const handleAirlineChange = (e: ChangeEvent<HTMLInputElement>) => setAirline(e.target.value);
    const handleIsUrgentChange = (e: ChangeEvent<HTMLSelectElement>) => setIsUrgent(e.target.value); // Handler for select
    const handleTimeLeewayChange = (e: ChangeEvent<HTMLInputElement>) => setTimeLeeway(e.target.value); // Handler for time leeway
    // --- End Handlers ---

    return (
        <div className={styles.parent}>
            {/* Background Clouds */}
            {/* Cloud 1 */}
      <img src={cloud1} alt="cloud1" className="absolute top-10 left-0 w-1/4 z-0 opacity-60 animate-pulse object-contain" />
      
      {/* Cloud 2 */}
      <img src={cloud2} alt="cloud2" className="absolute top-5 left-3/4 w-1/5 z-0 opacity-60 animate-pulse object-contain" />
      
      {/* Cloud 3 */}
      <img src={cloud3} alt="cloud3" className="absolute bottom-60 right-1/15 w-1/4 z-0 opacity-60 animate-pulse object-contain" />
      
      {/* Cloud 4 */}
      <img src={cloud4} alt="cloud4" className="absolute top-40 left-300 w-1/4 z-0 opacity-60 animate-pulse object-contain" />
      
      {/* Cloud 5 */}
      <img src={cloud5} alt="cloud5" className="absolute top-70 left-40 w-1/4 z-0 opacity-60 animate-pulse object-contain" />

            <img src={star} alt="star" className="absolute top-10 left-10 w-1/8 z-o opacity-100 animate-pulse object-contain rotate-180" />
      <img src={star} alt="star" className="absolute top-10 right-10 w-1/8 z-o opacity-100 animate-pulse object-contain" />
      <img src={star} alt="star" className="absolute bottom-100 left-40 w-1/8 z-o opacity-100 animate-pulse object-contain rotate-90" />
      <img src={star} alt="star" className="absolute top-5 right-80 w-1/6 z-o opacity-100 animate-pulse object-contain rotate-330" />
      <img src={star} alt="star" className="absolute bottom-100 right-30 w-1/13 z-o opacity-100 animate-pulse object-contain rotate-40" />

            <div className={styles.contentWrapper}>
                {/* Title - Adjust styling as needed */}
                <div className={styles.normalFont} style={{ alignSelf: 'flex-start', marginBottom: '1.5rem', fontWeight: 'bold', fontSize: '1.2rem' }}>Enter Flight:</div>
                {/* Container for the form elements */}
                <div className={styles.FlightInfoContainer}>
                    

                    {/* Input Row 1: Flight Number */}
                    <div className={styles.inputRow}>
                        <label className={styles.inputLabel}>Flight:</label>
                        <StyledTextInput
                            value={flightNumber}
                            onChange={handleFlightNumberChange}
                            placeholder="e.g., AA 123"
                        />
                    </div>

                    {/* Input Row 2: Departure */}
                    <div className={styles.inputRow}>
                        <label className={styles.inputLabel}>Departure:</label>
                        <StyledTextInput
                            value={departure}
                            onChange={handleDepartureChange}
                            placeholder="e.g., LAX"
                        />
                    </div>

                    {/* Input Row 3: Arrival */}
                    <div className={styles.inputRow}>
                        <label className={styles.inputLabel}>Arrival:</label>
                        <StyledTextInput
                            value={arrival}
                            onChange={handleArrivalChange}
                            placeholder="e.g., JFK"
                        />
                    </div>

                    {/* Input Row 4: Date */}
                    <div className={styles.inputRow}>
                        <label className={styles.inputLabel}>Date:</label>
                        <StyledTextInput
                            value={date}
                            onChange={handleDateChange}
                            placeholder="e.g., YYYY-MM-DD"
                            type="date" // Use date type if appropriate
                        />
                    </div>

                    {/* Input Row 5: Departure Time */}
                    <div className={styles.inputRow}>
                        <label className={styles.inputLabel}>Dep. Time:</label>
                        <StyledTextInput
                            value={depTime}
                            onChange={handleDepTimeChange}
                            placeholder="e.g., 10:00"
                            type="time" // Use time type
                        />
                    </div>

                    {/* Input Row 6: Arrival Time */}
                    <div className={styles.inputRow}>
                        <label className={styles.inputLabel}>Arr. Time:</label>
                        <StyledTextInput
                            value={arrTime}
                            onChange={handleArrTimeChange}
                            placeholder="e.g., 18:30"
                            type="time" // Use time type
                        />
                    </div>

                    {/* Input Row 7: Airline */}
                    <div className={styles.inputRow}>
                        <label className={styles.inputLabel}>Airline:</label>
                        <StyledTextInput
                            value={airline}
                            onChange={handleAirlineChange}
                            placeholder="e.g., American Airlines"
                        />
                    </div>

                    {/* Input Row 8: Urgent */}
                    <div className={styles.inputRow}>
                        <label className={styles.inputLabel}>Urgent:</label>
                        <select
                            className={styles.selectInput} // Use the specific class for select styling
                            value={isUrgent}
                            onChange={handleIsUrgentChange}
                        >
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </div>

                    {/* Input Row 9: Time Leeway */}
                    <div className={styles.inputRow}>
                        <label className={styles.inputLabel}>Time Leeway:</label>
                        <StyledTextInput
                            value={timeLeeway}
                            onChange={handleTimeLeewayChange}
                            placeholder="e.g., 30 minutes, 1 hour"
                        />
                    </div>


                    <Spacer size="1.5rem" />
                    <NextButton
                        targetPath="/Confirmation" // Ensure this path exists in your router
                    />

                </div> {/* End FlightInfoContainer */}
            </div> {/* End contentWrapper */}
        </div> /* End parent */
    );
};

export default EnterManually;