import React from 'react';
import '../styles/Contact.css';

function AboutUs(TeamMember) {
  return (
    <div>
      <img src={TeamMember.img} alt="avatar" className="avatar" />
      <h2 className="avatar-title">{TeamMember.name}</h2>
    </div>
  );
}

export default AboutUs;
