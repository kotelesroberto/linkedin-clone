import styled from "styled-components";
import * as variables from "./Variables";

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

/* Profile page boxes */

export const BoxContainer = styled(Card)`
  color: ${variables.colors.colorFonter};
  padding: 24px 0;
`;

export const BoxCardTop = styled.div`
  padding: 0 24px;

  h2 {
    font-size: 20px;
  }
  h3 {
    font-size: 14px;
    font-weight: 400;
  }
  span {
    font-size: 14px;
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      margin-right: 4px;
    }
  }
`;

export const BoxCardContent = styled.div`
  padding: 12px 24px;
`;

export const ContentList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ContentListItem = styled.li`
  color: ${variables.colors.colorFonter};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  border-bottom: 1px solid ${variables.colors.maincolor7};
  padding: 12px 0;

  &:last-child {
    border: none;
  }

  h3 {
    font-size: 16px;
  }

  h4 {
    font-size: 14px;
    font-weight: 400;
  }
  p {
    font-size: 14px;
    margin: 0;
  }
  img {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }
`;
