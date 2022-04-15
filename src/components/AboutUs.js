import React from 'react';
import '../styles/Contact.css';

function AboutUs(props) {
  return (
    <div>
      <img src={props.img} alt="avatar" className="avatar" />
      <h2 className="avatar-title">{props.name}</h2>
    </div>
  );
}

export default AboutUs;
