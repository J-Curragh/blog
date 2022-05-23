import styled from "styled-components";

interface Props {
  colour: string;
}

export const Box = styled.div<Props>`
  background-color: ${props => props.colour || "#D3D3D3"};
  border-color: ${props => props.colour || "#D3D3D3"};
  border-radius: 5px;
  height: 20px;
  min-width: 20px;
  padding-left: 5px;
  padding-right: 5px;
  white-space: nowrap;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row-reverse nowrap;
  font-size: small;
`;