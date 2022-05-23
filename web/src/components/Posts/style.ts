import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  text-align: start;
  
  @media only screen and (min-width: 992px) {
    column-gap: 5rem;
    row-gap: 2rem;
    grid-template-columns: repeat(2, minmax(0, .5fr));
  }
`;

export const Container = styled.div`
  background-color: #353535;
  cursor: pointer;
  display: flex;
  margin-top: 1rem;
  padding-top: 1rem;
  padding-bottom: 1.5rem;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Info = styled.a`
  color: #D9D9D9;
`;

export const Title = styled(Info)`
  color: #FFF;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
  padding-top: 1rem;
  padding-bottom: .5rem;
`;
