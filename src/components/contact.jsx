import React, { Component } from 'react';
import '../styles/contact.css';

class Contact extends Component {
    render() {
      return (
        <div className="contact-container" id="contact">
          <div className="contact-header">
            <h1>Get In Touch!</h1>
          </div>
          <div className="blurb">
            <p>
            Whether you have a question to ask or something new to share, please feel free to reach out and connect! I am always 
            open to opportunities and experiences!
            </p>
          </div>
          <a role="button" className="email-button" href="mailto:franklinw888@gmail.com">Say Hello!</a>
        </div>
      )
    }
  }
  

  export default Contact; 