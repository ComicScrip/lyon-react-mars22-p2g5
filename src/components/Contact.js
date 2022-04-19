// eslint-disable-next-line import/no-duplicates
import React from 'react';
import '../styles/Contact.css';
import AboutUs from './AboutUs';
import avatar1 from '../img/avatar1.png';
import avatar2 from '../img/avatar2.png';
import avatar3 from '../img/avatar3.png';
import avatar4 from '../img/avatar4.png';
import { send } from 'emailjs-com';
// eslint-disable-next-line import/no-duplicates
import { useState } from 'react';

function Contact() {
  const [toSend, setToSend] = useState({
    name: '',
    message: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send('service_vb5w29l', 'template_n8t0wyg', toSend, 'O_9iw3wSnKCEaN8Pj')
      .then((response) => {
        alert(
          'Merci, votre message a bien été envoyé !',
          response.status,
          response.text
        );
      })
      .catch((err) => {
        alert('Erreur...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ toSend, [e.target.name]: e.target.value });
  };

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
      <form className="form" onSubmit={onSubmit}>
        <label htmlFor="name">Nom :</label>
        <input
          name="name"
          type="text"
          id="name"
          value={toSend.name}
          placeholder="ex: John Smith"
          required="required"
          onChange={handleChange}
        />
        <label htmlFor="email">E-mail :</label>
        <input
          name="mail"
          type="email"
          id="email"
          value={toSend.mail}
          placeholder="ex: john.smith@mail.com"
          required="required"
          onChange={handleChange}
        />

        <label htmlFor="text-area">Votre message :</label>
        <textarea
          name="message"
          id="text-area"
          value={toSend.message}
          placeholder="Votre texte ici...(max 400 caractères)"
          required="required"
          onChange={handleChange}
          maxLength="400"
          style={{ resize: 'none' }}
        />
        <input type="submit" value="Envoyer" className="submit" />
      </form>
    </div>
  );
}
export default Contact;
