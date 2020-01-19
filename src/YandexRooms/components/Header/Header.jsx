import React, { useState } from 'react';
import headerLogo from './img/headerLogo.svg';
import './Header.css';

export function Header() { 
  return (
    <header className="header">
      <a href="#">
        <img src={headerLogo} className="header__logo"/>
      </a>
    </header>
  )
}