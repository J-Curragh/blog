import styled from 'styled-components';

export const FooterBox = styled.footer`
  background-color: ${(props) => props.theme.Emphasis.value};
  display: flex;
  position: sticky; /* I do not care about Internet Explorer. */
  position: -webkit-sticky;
  bottom: 0;
  width: 100%;
  height: 75px;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding-right: 3vh;
  padding-left: 3vh;
  width: 100%;
`;

export const Icon = styled.a`
  margin-right: 5px;
  margin-left: 5px;

  &:hover ${Container} {
    background-color: #353535;
  }
`;

export const Selector = styled.form`
  font-weight: bold;

  span {
    padding-right: 10px;
  }
`;
