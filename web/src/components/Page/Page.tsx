import React, { ReactNode } from 'react';
import * as S from './style';

interface PageProps {
  children: ReactNode;
}

export const Page = ({ children }: PageProps) => {
  return <S.Container>{children}</S.Container>;
};
