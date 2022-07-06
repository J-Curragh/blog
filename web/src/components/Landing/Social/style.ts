import styled from 'styled-components';

// Desktop-only component
export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  padding: 0.5rem;
`;

export const Section = styled.div`
  height: 50%;

  h1 {
    color: ${(props) => props.theme.Foam.value};
    margin-top: 0.1em;
    margin-bottom: 0.1em;
  }
`;
