import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Navigation/Navigation.scss';

const AuthNav = () => {
  return (
    <div>
      <NavLink exact to="/register" className="link">
        Sign up
      </NavLink>
      <NavLink to="/login" className="link">
        Sign in
      </NavLink>
    </div>
  );
};

export default AuthNav;
