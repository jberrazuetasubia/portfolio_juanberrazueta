import React from 'react';

const ContactInfo = () => (
  <div className="contact-info">
    <div className="item">
      <h6>Phone:</h6>
      <p>+1 234-567-890</p>
    </div>
    <div className="item">
      <h6>Address:</h6>
      <p>123 Main St, Your City, Country</p>
    </div>
    <div className="item">
      <h6>Email:</h6>
      <p><a href="mailto:you@example.com">you@example.com</a></p>
    </div>
  </div>
);

export default ContactInfo;
