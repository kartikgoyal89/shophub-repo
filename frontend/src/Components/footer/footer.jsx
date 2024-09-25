import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="bg-dark text-light py-4">
      <h2 className='text-center py-3'>SHOPHUB</h2>
      <div className='footer_container'>
        <div>
          <h5>Navigation</h5>
          <ul className="list-unstyled">
            <li><a href="/">Home</a></li>
            <li><a href="/">Products</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Contact Us</a></li>
          </ul>
          </div>
          <div>
            <h5>Contact Us</h5>
            <address>
              123 Main Street<br />
              City, State, 12345<br />
              Phone: (123) 456-7890<br />
              Email: info@example.com
            </address>
            </div>
            <div>
              <h5>Follow Us</h5>
              <ul className="list-unstyled">
                <li><a href="https://facebook.com/example">Facebook</a></li>
                <li><a href="https://twitter.com/example">Twitter</a></li>
                <li><a href="https://instagram.com/example">Instagram</a></li>
              </ul>
              </div>
            </div>
            <p className="text-center">&copy; 2024 ShopHub. All rights reserved.</p>
            </div>
            );
};
export default Footer;