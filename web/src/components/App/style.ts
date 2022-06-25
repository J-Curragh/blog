import styled from 'styled-components';

interface ScreenProps {
  children: JSX.Element | JSX.Element[];
}

export const Screen = styled.div<ScreenProps>`
  background-color: ${props => props.theme.Base.value};
  min-height: 100vh;
`;

export const Fill = styled.main`
  margin-left: auto;
  margin-right: auto;
  max-width: 64rem;
  min-height: calc(100vh - 88px - 52px);
  padding-top: .5rem;
  padding-bottom: .5rem;
  
`;

export const NavLinkStyled = styled.a`
  color: ${props => props.theme.PrimaryText.value};
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.75rem;
  padding: 1px;
  text-align: center;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 4px;
    text-decoration-color: ${props => props.theme.Emphasis.value}
  }
`;
