import styled from "styled-components";
import { StyledProp } from "../interfaces/IStyledProp";
export const Navigation = styled.nav<StyledProp>`
  color: --text-color;
  height: max-content;
  padding: 20px 0;
  display: ${({displayFlex}) => displayFlex ? displayFlex : 'flex'};
  justify-content: space-around;
  font-size: 20px;
  text-align: center;
`;
