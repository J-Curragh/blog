import styled from 'styled-components';

export const SplitContainer = styled.div`
  color: ${(props) => props.theme.Text.value};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  h1 {
    color: ${(props) => props.theme.Gold.value};
  }
`;

export const Row = styled.div`
  display: block;
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  @media (min-width: 768px) {
    width: 85%;
  }
`;

export const RightColumn = styled(LeftColumn)`
  margin-left: 3em;
  height: 100%;

  @media (min-width: 768px) {
    width: 15%;
  }
`;

export const BadgeContainer = styled.a`
  align-items: center;
  color: ${(props) => props.theme.Subtle.value};
  display: flex;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  text-decoration-line: none;

  span {
    font-size: 1.2em;
    margin-left: 0.5em;
  }

  &:hover {
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.Iris.value};
    text-decoration-thickness: 3px;
  }
`;
