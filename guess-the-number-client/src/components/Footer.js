import React from 'react';
import '../App.css';

function Footer() {
  return (
    <footer className="navbar navbar-expand-lg bg-primary fixed-bottom">
      <div className="container">
        <p className="text-white">
          Email: <a className="footer-link" href="mailto:jeanmarie.jackman@gmail.com">jeanmarie.jackman@gmail.com</a> | LinkedIn: <a className="footer-link" href="https://www.linkedin.com/in/jeanmariejackman/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/jeanmariejackman/</a> | GitHub: <a className="footer-link" href="https://github.com/JeanmarieJackman/guess-the-number" target="_blank" rel="noopener noreferrer">https://github.com/JeanmarieJackman/guess-the-number</a>   | &copy; 2023
        </p>
      </div>
    </footer>
  );
}

export default Footer;
