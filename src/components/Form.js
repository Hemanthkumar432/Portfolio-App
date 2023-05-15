import "./FormStyles.css"
import { useState } from "react";
import React from 'react'

const Form = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name,
      email,
      subject,
      message
    };
    try {
      const response = await fetch('https://upset-frog-production.up.railway.app/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Your data has been submitted successfully. Hemanth will get in touch with you soon. Thank you');
      } else if (response.status === 500) {
        const errorData = await response.json();
        if (errorData.error === 'DuplicateEntryError') {
          alert('Failed to submit. Some technical issue occurred. Please retry again.');
        } else {
          alert('Failed to submit. The record you are trying to create already exists.');
        }
      } else {
        alert('Failed to submit. Please retry again.');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
      alert('Failed to submit form data');
    }
  };

  return (
    <div className="form">
        <form onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input type="text" value={name} onChange={event => setName(event.target.value)} />
            <label> Email</label>
            <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
            <label>Subject</label>
            <input type="text" value={subject} onChange={event => setSubject(event.target.value)} />
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here" value={message} onChange={event => setMessage(event.target.value)} />
            <button className="btn" >Submit</button>
        </form>
            </div>
  )
}

export default Form

