import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function header() {
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };

  return (
    <div>
      <header className='header'>
        <div className='brand'>
          <button onClick={openMenu}>&#9776;</button>
          <Link to='/'>amazona</Link>
        </div>
        <div classNameName='header-links'>
          <a className='header-link' href='cart.html'>
            Cart
          </a>
          <a className='header-link' href='signin.html'>
            Signin
          </a>
        </div>
      </header>
    </div>
  );
}

export default header;
