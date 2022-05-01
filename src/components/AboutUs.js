import React from 'react';
import '../styles/Contact.css';
import { ExternalLink } from 'react-external-link';

function AboutUs(TeamMember) {
  return (
    <div>
      <ExternalLink href={TeamMember.lien}>
        <img src={TeamMember.img} alt="avatar" className="avatar" />
        <h2 className="avatar-title">{TeamMember.name}</h2>
      </ExternalLink>
    </div>
  );
}

export default AboutUs;
