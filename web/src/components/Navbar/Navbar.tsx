import React, { ReactNode, useState } from 'react';
import { useWindowDimensions } from '../../contexts/useWindowDimensions';
import MenuIcon from './MenuIcon';
import { NavLink } from './NavLink';
import * as S from './style';

interface NavbarProps {
  children: JSX.Element | JSX.Element[];
}

const Navbar = ({ children }: NavbarProps) => {
  const windowSpec = useWindowDimensions();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen((b) => !b);

  // Show chevron icon on smaller devices
  const showMenuButton = () =>
    windowSpec.width < 768 ? (
      <MenuIcon open={isOpen} onClick={toggleMenu} />
    ) : (
      <></>
    );

  const showNavbarLinks = () =>
    isOpen || windowSpec.width >= 768 ? children : <></>;

  return (
    <S.Container>
      <S.Header>
        <S.NavbarLeft>
          <NavLink href="#">JCLI</NavLink>
          {showMenuButton()}
        </S.NavbarLeft>
        <S.NavbarRight>{showNavbarLinks()}</S.NavbarRight>
      </S.Header>
    </S.Container>
  );
};

export default Navbar;
