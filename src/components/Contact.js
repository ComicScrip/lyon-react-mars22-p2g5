import React from 'react';
import '../styles/Contact.css';
import AboutUs from './AboutUs';
import avatar1 from '../img/avatar1.png';
import avatar2 from '../img/avatar2.png';
import avatar3 from '../img/avatar3.png';
import avatar4 from '../img/avatar4.png';

function Contact() {
  return (
    <div className="contact-form">
      <h1 className="about-us-title">About Us</h1>
      <div className="avatars">
        <AboutUs name="Claire" img={avatar1} />
        <AboutUs name="Jonathan" img={avatar2} />
        <AboutUs name="Benjamin" img={avatar3} />
        <AboutUs name="Timo" img={avatar4} />
      </div>
      <h1 className="contact-title">Contact</h1>
      <form className="form">
        <label htmlFor="name">Nom :</label>
        <input
          type="text"
          id="name"
          placeholder="ex: John Smith"
          required="required"
        />
        <label htmlFor="email">E-mail :</label>
        <input
          type="email"
          id="email"
          placeholder="ex: john.smith@mail.com"
          required="required"
        />

        <label htmlFor="text-area">Votre message :</label>
        <textarea
          name="text-area"
          id="text-area"
          placeholder="Votre texte ici...(max 400 caractères)"
          required="required"
          maxLength="400"
          style={{ resize: 'none' }}
        />
        <input type="submit" value="Envoyer" className="submit" />
      </form>
    </div>
  );
}

export default Contact;
