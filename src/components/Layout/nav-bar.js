import React from 'react';

import { Link } from 'react-router-dom';
import AuthNav from '../Auth/auth-nav';

const NavBar = () => {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div
          className="container"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            // flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',

            // outline: '1px solid black'
          }}
        >
          <div className="navbar-brand logo" />
          <div>
            <Link to="/" style={{ color: '#E2F0F7', paddingRight: '35px' }}>
              Home
            </Link>
            <Link
              to="/graphs"
              style={{ color: '#E2F0F7', paddingRight: '35px' }}
            >
              Graphs
            </Link>

            {/* dev note: added this link to user profile */}

            <Link
              to="/profile"
              style={{ color: '#E2F0F7', paddingRight: '29px' }}
            >
              Profile
            </Link>
          </div>

          {/* dev note: added div containing imported AuthNav Component  */}

          <div>
            <AuthNav />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
