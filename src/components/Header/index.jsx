import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <p className="header-title" onClick={() => navigate('/')} style={{'cursor': 'pointed'}}>EVENTIFY</p>
    </div>
  );
}

export default Header;
