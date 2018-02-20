import React from 'react';
import './spinner-style.css';

const LoadingSpinner = (props) => {
  if (props.status) {
    return (
      <div className="search-spinner">
        <div className="loader"></div>
      </div>
    )
  } else return <div />
};

export default LoadingSpinner;
