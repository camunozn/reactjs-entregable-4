import React from 'react';

const Alert = ({ alertType, alertMessage }) => {
  return (
    <div className="alert-window">
      <div
        className={`alert-icon ${
          alertType === 'success' ? 'alert-icon--success' : 'alert-icon--error'
        }`}
      >
        <i
          className={`fa-regular fa-circle-${
            alertType === 'success' ? 'check' : 'xmark'
          }`}
        ></i>
      </div>
      <div className="alert-title">
        <h2>{alertType}</h2>
      </div>
      <div className="alert-message">
        <p>{alertMessage}</p>
      </div>
    </div>
  );
};

export default Alert;
