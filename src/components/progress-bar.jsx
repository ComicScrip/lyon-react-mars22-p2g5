// import React from "react";
import '../styles/ProgressBar.css';

function ProgressBar({ bgColor, completed }) {
  const fillerStyle = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgColor,
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1s ease-in-out',
  };
  return (
    <div className="containerStyle">
      <div style={fillerStyle}>
        <span className="labelStyle">{`${completed}%`}</span>
      </div>
    </div>
  );
}
export default ProgressBar;
