import styled from 'styled-components';

export const FooterBox = styled.footer`
  display: flex;
  position: sticky; /* I do not care about Internet Explorer. */
  position: -webkit-sticky;
  bottom: 0;
  width: 100%;
  height: 75px;
  background-color: #2A2A2A;
`;

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-right: 3vh;
  padding-left: 3vh;
`;

export const Icon = styled.a`
  margin-right: 5px;
  margin-left: 5px;
  
  &:hover ${Container} {
    background-color: #353535;
  }
`;

