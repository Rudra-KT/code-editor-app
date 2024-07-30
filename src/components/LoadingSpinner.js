import React from 'react';
import RingLoader from 'react-spinners/RingLoader'; // Import the spinner
import './LoadingSpinner.css';

const LoadingSpinner = () => (
  <div className="spinner-container">
        <RingLoader color="#95A1F9" loading={true} size={150} />
  </div>
);

export default LoadingSpinner;
