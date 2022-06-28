import styled from "styled-components";

export const IntroContainer = styled.div`
  background-color: ${props => props.theme.Primary.value};
  border-color: ${props => props.theme.Base.value};
  border-radius: 1.5rem; 
  border-width: 2px;
  border-style: solid;
  box-sizing: border-box;
  color: ${props => props.theme.PrimaryText.value};
  display: flex;
  flex-flow: row nowrap;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  width: 100%; 

  h1 {
    font-size: 2.5em; 
    margin-top: 0;
    margin-bottom: 0;
  }

  p {
    color: ${props => props.theme.SubtitleText.value};
    font-size: 1.2em;
    margin-top: .1em;
    margin-bottom: .15em;
  }

  @media (min-width: 768px) {
  }
`;

export const PaddedContainer = styled.div`
  padding: .5rem;
`;

export const Container = styled.div`
  background-color: ${props => props.theme.Base.value};
  border-color: ${props => props.theme.Base.value};
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  box-sizing: border-box;
  color: ${props => props.theme.SubtitleText.value};
  display: flex;
  flex-flow: column wrap;
  margin-left: .5rem;
  margin-right: .5rem;
  padding: .5rem;
  width: 100%; 

  img {
    margin-right: 1em;
  }

  h1 {
    font-size: 2.5em;
    margin-top: .1em;
    margin-bottom: 0;
  }
  
  ul {
    margin: 0;
  }

  p, li {
    font-size: 1.4em;
    margin-top: .5em;
    margin-bottom: .15em;
  }
`;
