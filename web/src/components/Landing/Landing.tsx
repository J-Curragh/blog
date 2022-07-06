import React from 'react';
import * as S from './style';
import { useWindowDimensions } from '../../contexts/useWindowDimensions';
import { AboutIntro } from './About/AboutIntro';
import Posts from './Posts/Posts';
import { Social } from './Social/Social';

export const Landing = () => {
  const { width } = useWindowDimensions();

  return (
    <React.Fragment>
      <S.Row>
        <AboutIntro />
      </S.Row>
      <S.SplitContainer>
        <S.LeftColumn>
          <Posts />
        </S.LeftColumn>
        <S.RightColumn>{width > 768 ? <Social /> : <></>}</S.RightColumn>
      </S.SplitContainer>
    </React.Fragment>
  );
};
