import React, { SetStateAction, useContext } from 'react';
import { useTheme } from 'styled-components';
import ThemeContext from '../../contexts/ThemeContext';

interface MenuIconProps {
  open: boolean;
  onClick: () => void;
}
const MenuIcon = ({ open, onClick }: MenuIconProps) => {
  const { currentTheme } = useContext(ThemeContext);

  const closedChevronSVG = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );

  const openChevronSVG = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  );

  return (
    <button type="button" onClick={onClick}>
      {open ? openChevronSVG() : closedChevronSVG()}
    </button>
  );
};

export default MenuIcon;
