import React from "react";

const Alert = ({ alertMessage, type }) => {
  return <div className={`alert ${type}`}>{alertMessage}</div>;
};

export default Alert;
