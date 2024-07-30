import React from 'react';
import './Tab.css';

const Tab = React.memo(({ activeTab, setActiveTab, label }) => {
  return (
    <button
      onClick={() => setActiveTab(label)}
      style={{ color: activeTab === label ? '#5a6cf7' : 'black' }}
      className='button-30'
    >
      {label}
    </button>
  );
});

export default Tab;
