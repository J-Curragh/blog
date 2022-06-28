import styled from "styled-components";

// Desktop-only component 
export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  padding: .5rem;
`;

export const Section = styled.div`
  height: 50%;
  
  h1 {
    margin-top: .1em;
    margin-bottom: .1em;
  }
`;

