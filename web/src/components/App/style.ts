import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #353535;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  text-align: center;
`;

export const Screen = styled.div`
  min-height: calc(100vh - 75px);
`;

export const Row = styled.div`
  display: flex;
  min-width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #3c6e71;
  margin-bottom: 5vh;
`;

export const Container = styled.main`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  justify-content: flex-start;
  margin: 4rem auto 1.75rem;
  max-width: 1260px;
  width: 100%;

  h1 {
    align-self: flex-start;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.75rem;
    margin-bottom: 0;
    text-transform: uppercase;
  }
  
  @media only screen and (min-width: 768px) {
    main {
      padding-left: 6rem;
      padding-right: 6rem;
    }
  }
`;
