import React from 'react';
import HashLoader from 'react-spinners/HashLoader'; // Import the spinner

const LoadingSpinner = () => (
  <div className="spinner-container">
        <HashLoader color="#fff" cssOverride={{}} speedMultiplier={1}/>
  </div>
);

export default LoadingSpinner;
