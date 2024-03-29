import styled from 'styled-components';

export const IntroContainer = styled.div`
  background-color: ${(props) => props.theme.Pine.value};
  border-color: ${(props) => props.theme.Base.value};
  border-radius: 1.5rem;
  border-width: 2px;
  border-style: solid;
  box-sizing: border-box;
  color: ${(props) => props.theme.Text.value};
  display: flex;
  flex-flow: column nowrap;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  width: 100%;

  h1 {
    text-align: center;
    font-size: 2.5em;
    margin-top: 0;
    margin-bottom: 0;

    @media (min-width: 768px) {
      text-align: left;
    }
  }

  p {
    font-size: 1.2em;
    line-height: 1.8em;
    margin-top: 0.1em;
    margin-bottom: 0.15em;
  }

  @media (min-width: 768px) {
    flex-flow: row nowrap;
  }
`;

export const PaddedContainer = styled.div`
  padding: 1rem;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    margin-top: auto;
    margin-bottom: auto;
    padding: 0.5rem;
  }
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.Base.value};
  border-color: ${(props) => props.theme.Base.value};
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  box-sizing: border-box;
  color: ${(props) => props.theme.Subtle.value};
  display: flex;
  flex-flow: column wrap;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  padding: 0.5rem;
  width: 100%;

  img {
    margin-right: 1em;
  }

  h1 {
    font-size: 2.5em;
    margin-top: 0.1em;
    margin-bottom: 0;
  }

  ul {
    margin: 0;
  }

  p,
  li {
    font-size: 1.4em;
    margin-top: 0.5em;
    margin-bottom: 0.15em;
  }
`;
