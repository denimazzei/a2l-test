import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => history.goBack()}
          >
            &larr; Go Back
          </button>
        )}
        <div className="footer-copyright text-center py-3">
        <container fluid>
          &copy; {new Date().getFullYear()} Copyright <a href="https://www.adventure2learning.com"> Adventure 2 Learning </a>
        </container>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
