import styled from 'styled-components';

export const HeadingContainer = styled.div`
  text-align: left;
`;

export const PostBlock = styled.div`
  display: block;
  margin-bottom: 2.5rem;
  text-align: left;
`;

export const Title = styled.h2`
  margin: 0;
  padding-top: .5em;
  padding-bottom: .5em;
`;

export const PreviewBody = styled.p`
  color: ${props => props.theme.Subtle.value};
  margin: 0;
`;
