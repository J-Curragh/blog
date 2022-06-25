import styled from 'styled-components';

interface ContainerProps {
  children: JSX.Element | JSX.Element[];
}
export const Container = styled.div<ContainerProps>`
  margin-left: auto;
  margin-right: auto;
  max-width: 64rem;
  padding: 2rem;
`;

export const Header = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;	
    justify-content: space-between;
    padding: 2px;
  }

  button {
    background-color: ${props => props.theme.Base.value};
    border-color: ${props => props.theme.Base.value};
    border-style: solid;
    box-shadow: none;
    color: ${props => props.theme.PrimaryText.value};

    &:hover {
      color: ${props => props.theme.SubtitleText.value};
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
