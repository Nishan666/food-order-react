import React from "react";

const Error = ({ title, message }) => {
  return (
    <div className="error">
      <h2 className="center">{title}</h2>
      <p className="center">{message}</p>
    </div>
  );
};

export default Error;
