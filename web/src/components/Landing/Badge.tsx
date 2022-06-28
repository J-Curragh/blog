import React from 'react';
import * as S from './style';

interface BadgeProps {
  children: JSX.Element;
  href: string;
  label: string;
}

export const Badge = ({ children, href, label }: BadgeProps)=> {
  return (
    <S.BadgeContainer href={href}>
      {children}
      <span>{label}</span>
    </S.BadgeContainer>
  );
};
