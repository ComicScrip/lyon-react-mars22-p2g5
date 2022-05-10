// import React from "react";
import '../styles/ProgressBar.css';

function ProgressBar({ bgColor, completed }) {
  const fillerStyle = {
    height: '100%',
    width: `${100 - completed * 5}%`,
    backgroundColor: bgColor,
    /* backgroundImage: `linear-gradient(to right, ${bgColor} ${100 - (completed * 5)}%, green)`, */
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1s ease-in-out',
    fontSize: '1rem',
  };
  return (
    <div className="containerStyle">
      <div style={fillerStyle}>
        <span className="labelStyle">{`${completed}`}</span>
      </div>
    </div>
  );
}
export default ProgressBar;
