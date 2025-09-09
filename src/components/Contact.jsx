import React, { useState } from 'react';
import {useApplicationContext} from "../contexts/ContextProvider.jsx";
import "../styles/Contact.scss";

const Contact = () => {
  const { username } = useApplicationContext();
  const [contactToggle, setContactToggle] = useState(false);

  const handleContactToggle = () => {
    setContactToggle(!contactToggle);
  }

  return (
    <div className="contact">
      <div
        className="contact-label"
        data-form-open={`${contactToggle}`}
      >
        <p className="p2">Contact</p>
        <span
          className={`material-symbols-rounded arrow-icon ${contactToggle ? 'rotated' : ''}`}
          onClick={handleContactToggle}
        >
            arrow_drop_up
          </span>
      </div>
      <div className={`contact-form ${contactToggle ? 'open' : ''}`}>
        <div className="contact-form-content">
          <p className="p1">Let's get in touch</p>
          <form>
            <input name="name" type="text" placeholder="Name" defaultValue={username} autoComplete="name" required />
            <input name="email" type="email" placeholder="Email" autoComplete="email" required />
            <textarea name="message" placeholder="Message" rows="4" cols="4" required />
            <button type="submit">
              Send
              <span className="material-symbols-rounded">send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
