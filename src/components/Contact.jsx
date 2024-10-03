import React, { useState } from 'react';
import './Contact.scss';
import "../App.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch('https://backend-ancons-nodejs-1.onrender.com/api/users/contact', {

     

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Message sent successfully');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        alert('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <section className="contact" id='contact'>
      <div className="container">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="cta-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
