import React from 'react';
import * as S from './style';

const TextContent = () => (
  <div>
    <h1>Hi, I'm Jake! 👋</h1>
    <p>I'm a developer and student based in Belfast with a passion for open-source software.</p>
    <p>I'm currently studying Computing Systems at Ulster University, and working full-time as a full-stack web developer.</p>
  </div>
)

export const AboutIntro = (props: {}) => {
  return (
    <S.IntroContainer>
      <S.PaddedContainer>
        <img src="logo512.png" alt="Me!" height={128} width={128} />
      </S.PaddedContainer>
      <S.PaddedContainer>
        <TextContent />
      </S.PaddedContainer>
    </S.IntroContainer>
  )
};
