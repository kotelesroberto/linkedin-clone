import styled from "styled-components";
import { IconButtonRow } from "./Icons";
import { Card, CardContainer } from "./Cards";
import * as variables from "./Variables";

export const ShareBoxContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  color: ${variables.colors.colorFont};
  padding: 12px;
`;

export const ShareBoxWrapper = styled(CardContainer)``;

export const ShareBoxTop = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  button {
  }
`;

export const ShareBoxButtons = styled(IconButtonRow)`
  margin-bottom: -10px;
  span,
  img {
    pointer-events: none;
  }
`;
