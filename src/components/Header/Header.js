import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="p-4 d-flex justify-content-center">
      <Link
        className="text-decoration-none"
        to='/'
      >
        <h1>Интернет-витрина</h1>
      </Link>
    </div>
  )
}

export default Header;
