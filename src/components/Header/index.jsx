import React from 'react';
import Logo from '../../assets/hamusic-logo.png';
import { ImageLogo } from '../../styles/components/Header';

const Header = () => {
  return (
      <>
        <header>
            <h1>
                <a href="/">
                    <ImageLogo src={Logo} alt="Hi-Music"/>
                </a>
            </h1>
        </header>
      </>
  );
}

export default Header;