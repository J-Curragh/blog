import React from 'react';
import styled from 'styled-components';

export const HeadingContainer = styled.div`
  text-align: left;
`;

export const PostBlock = styled.div`
  display: block;
  margin-bottom: 2.5rem;
  text-align: left;
`;

export const Title = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  h2 {
    margin: 0;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
  }
`;

export const PreviewBody = styled.p`
  color: ${(props) => props.theme.Subtle.value};
  margin: 0;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const defaultTagStyle: React.CSSProperties = {
  borderRadius: '0.25rem',
  padding: '3px',
  marginLeft: '4px',
  marginRight: '4px',
  width: 'auto',
  whiteSpace: 'nowrap',
};
