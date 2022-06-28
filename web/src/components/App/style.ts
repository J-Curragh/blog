import styled from 'styled-components';

interface ScreenProps {
  children: JSX.Element | JSX.Element[];
}

export const Screen = styled.div<ScreenProps>`
  background-color: ${props => props.theme.Base.value};
  min-height: 100vh;
`;

