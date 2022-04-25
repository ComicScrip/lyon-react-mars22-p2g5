import React from 'react';
import '../styles/Contact.css';

function AboutUs(avatar) {
  return (
    <div>
      <img src={avatar.img} alt="avatar" className="avatar" />
      <h2 className="avatar-title">{avatar.name}</h2>
    </div>
  );
}

export default AboutUs;
