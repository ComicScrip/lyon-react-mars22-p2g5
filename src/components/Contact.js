import React, { useState } from 'react';
import '../styles/Contact.css';
import AboutUs from './AboutUs';
import avatar1 from '../img/avatar1.png';
import avatar2 from '../img/avatar2.png';
import avatar3 from '../img/avatar3.png';
import avatar4 from '../img/avatar4.png';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import { send } from 'emailjs-com';

function Contact() {
  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openFailed, setOpenFailed] = React.useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    send('service_zxob1gs', 'template_n8t0wyg', toSend, 'O_9iw3wSnKCEaN8Pj')
      .then(() => {
        setOpenSuccess(true);
      })
      .catch(() => {
        setOpenFailed(true);
      });
  };

  const handleClose = () => {
    setOpenSuccess(false);
    setOpenFailed(false);
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div className="contact-form">
      <h1 className="about-us-title">About Us</h1>
      <div className="avatars">
        <AboutUs
          name="Claire"
          img={avatar1}
          lien="https://github.com/Claiirou"
        />
        <AboutUs
          name="Jonathan"
          img={avatar2}
          lien="https://github.com/JBillault"
        />
        <AboutUs
          name="Benjamin"
          img={avatar3}
          lien="https://github.com/Benjamin-Dervieux"
        />
        <AboutUs
          name="Timo"
          img={avatar4}
          lien="https://github.com/timonicolaux"
        />
      </div>
      <h1 className="contact-title">Contact</h1>
      <form className="form" onSubmit={onSubmit}>
        <label htmlFor="name">Nom :</label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={toSend.name}
          onChange={handleChange}
          placeholder="ex: John Smith"
          required="required"
        />
        <label htmlFor="email">E-mail :</label>
        <input
          type="email"
          id="email"
          name="email"
          defaultValue={toSend.email}
          onChange={handleChange}
          placeholder="ex: john.smith@mail.com"
          required="required"
        />

        <label htmlFor="text-area">Votre message :</label>
        <textarea
          id="text-area"
          name="message"
          defaultValue={toSend.message}
          onChange={handleChange}
          placeholder="Votre texte ici...(max 400 caractères)"
          required="required"
          maxLength="400"
          style={{ resize: 'none' }}
        />
        <input type="submit" value="Envoyer" className="submit" />
      </form>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={openSuccess}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{
            width: 300,
            height: 50,
            textAlign: 'center',
            fontSize: '1.2rem',
            mb: 2,
          }}
        >
          E-mail envoyé !
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={openFailed}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          sx={{
            width: 300,
            height: 50,
            textAlign: 'center',
            fontSize: '1.2rem',
            mb: 2,
          }}
        >
          Une erreur est survenue...
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Contact;
