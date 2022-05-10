import React, { useContext } from 'react';
import '../styles/Contact.css';
import { ExternalLink } from 'react-external-link';
import { NightModeContext } from '../contexts/nightModeContext';

function AboutUs(TeamMember) {
  const nightModeRendering = useContext(NightModeContext);
  return (
    <div>
      <ExternalLink href={TeamMember.lien}>
        <img src={TeamMember.img} alt="avatar" className="avatar" />
        <h2
          className={`avatar-title ${
            nightModeRendering.isNight && 'nightAvatar'
          }`}
        >
          {TeamMember.name}
        </h2>
      </ExternalLink>
    </div>
  );
}

export default AboutUs;
