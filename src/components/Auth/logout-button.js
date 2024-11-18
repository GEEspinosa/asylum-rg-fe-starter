import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { colors } from '../../styles/data_vis_colors'; 

const LogoutButton = () => {
  const { logout } = useAuth0();

  const {primary_accent_color} = colors;


  return (
    <button
      style={{
        color: '#E2F0F7',
        border: 'none',
        backgroundColor: primary_accent_color,
      }}
      className="btn btn-danger btn-block"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
