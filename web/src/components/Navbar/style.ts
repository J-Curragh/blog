import styled from 'styled-components';

interface ContainerProps {
  children: JSX.Element | JSX.Element[];
}
export const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 64rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

export const Header = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  button {
    background-color: ${(props) => props.theme.Base.value};
    border-color: ${(props) => props.theme.Base.value};
    border-style: solid;
    box-shadow: none;
    color: ${(props) => props.theme.Subtle.value};

    &:hover {
      color: ${(props) => props.theme.Love.value};
    }
  }
`;

export const NavbarLeft = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavbarRight = styled.div`
  align-items: flex-start;
  column-gap: 1rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
