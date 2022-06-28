import React from 'react';
import { AboutIntro } from './About/AboutIntro';
import { AboutMe } from './About/AboutMe';
import { Social } from './Social/Social';
import * as S from './style';

export const Landing = (props : {}) => {
  return (
    <React.Fragment>
      <S.Row>
        <AboutIntro />
      </S.Row>
      <S.SplitContainer>
        <S.LeftColumn>
          <AboutMe />
        </S.LeftColumn>
        <S.RightColumn>
          <Social />
        </S.RightColumn>
      </S.SplitContainer>
    </React.Fragment>
  )
}
