import styled from "styled-components";
import * as variables from './Variables';

export const Card = styled.div`
  background-color: ${variables.colors.white};
  border-radius: 8px;
  box-shadow: ${variables.shadows.boxShadow};
  transition-property: box-shadow;
  padding: 12px 0;
  position: relative;
  overflow: hidden;
  margin-bottom: 8px;
`;

export const CardContainer = styled.div`
  padding: 12px 0;
  padding: 0;
`;
