import React from 'react';
import './Tab.css';

const Tab = React.memo(({ activeTab, setActiveTab, label, isLightMode }) => {
  const textColor = activeTab === label
    ? (isLightMode ? '#F8C794' : '#5a6cf7') // Active tab color based on the theme
    : 'black'; // Inactive tab color

  return (
    <button
      onClick={() => setActiveTab(label)}
      style={{ color: textColor }}
      className='button-30'
    >
      {label}
    </button>
  );
});

export default Tab;
