import React from 'react';
import { Image } from 'antd';
//import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
//import AuthNav from '../Auth/auth-nav';
import NavBar from './nav-bar';

const { primary_accent_color } = colors;

function HeaderContent() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: primary_accent_color,
        // outline: '1px solid black'
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div>
        <NavBar />
      </div>  
    </div>
  );
}

export { HeaderContent };
