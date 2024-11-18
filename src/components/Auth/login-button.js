import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { colors } from '../../styles/data_vis_colors'; 
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const {primary_accent_color} = colors;

  return (
    <button
      style={{ 
        color: '#E2F0F7', 
        border: 'none',
        backgroundColor: primary_accent_color, 
      }}
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;