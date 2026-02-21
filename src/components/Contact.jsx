import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ClipLoader } from "react-spinners";
import { useApplicationContext } from "../contexts/ContextProvider.jsx";
import "../styles/Contact.scss";

const Contact = () => {
  const { username } = useApplicationContext();
  const [contactToggle, setContactToggle] = useState(false);
  const [formData, setFormData] = useState({
    name: username || "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  useEffect(() => {
    if (username) {
      setFormData((prev) => ({
        ...prev,
        name: username,
      }));
    }
  }, [username]);

  const handleContactToggle = () => {
    setContactToggle((prev) => !prev);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setStatusMessage("commit successful. message pushed");
        setFormData({
          name: username || "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        setStatusMessage("push failed. try again later.");
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => setStatusMessage(""), 3000);
      });
  };

  return (
    <div className="contact" data-form-open={`${contactToggle}`}>
      <div className="contact-label" data-form-open={`${contactToggle}`}>
        <p className="p2">contact</p>
        <span
          className={`material-symbols-rounded arrow-icon ${contactToggle ? "rotated" : ""}`}
          onClick={handleContactToggle}
        >
          arrow_drop_down
        </span>
      </div>

      <div className={`contact-form ${contactToggle ? "open" : ""}`}>
        <div className="contact-form-content">
          <p className="p1">let's get in touch</p>

          <form onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              name="email"
              type="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <ClipLoader size={16} color="#ffffff" />
                  &nbsp; pushing to origin...
                </>
              ) : (
                <>
                  push
                  <span className="material-symbols-rounded">send</span>
                </>
              )}
            </button>
          </form>

          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
