import React from 'react';
import usePosts from '../../contexts/usePosts';
import { AboutIntro } from './About/AboutIntro';
import { AboutMe } from './About/AboutMe';
import Posts from './Posts/Posts';
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
          <Posts />
        </S.LeftColumn>
        <S.RightColumn>
          <Social />
        </S.RightColumn>
      </S.SplitContainer>
    </React.Fragment>
  )
}
