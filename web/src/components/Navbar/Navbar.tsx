import React from 'react';
import * as SC from './style';

const Navbar = () => {
  const navLinks = ['home', 'knowledge base', 'about'];

  return (
    <>
      <SC.Logo>jcli</SC.Logo>
      <SC.Separator>|</SC.Separator>
      {navLinks.map((link) => (
        <SC.NavLink key={link}>{link}</SC.NavLink>
      ))}
    </>
  );
};

export default Navbar;
