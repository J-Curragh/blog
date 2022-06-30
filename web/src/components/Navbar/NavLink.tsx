import React from 'react'
import styled from 'styled-components';

export const NavLink = styled.a`
  color: ${props => props.theme.Text.value};
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.75rem;
  padding: 1px;
  text-align: center;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 4px;
    text-decoration-color: ${props => props.theme.Rose.value}
  }
`;

