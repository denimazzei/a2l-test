import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const IndexNavbar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">A2L</h1>
          </Link>
          <p className="m-0">Adventure 2 Learning</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/landing-page">
                {Auth.getProfile().data.name}'s video dashboard
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login-page">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/register-page">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default IndexNavbar;
