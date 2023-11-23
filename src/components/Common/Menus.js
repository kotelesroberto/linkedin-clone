import styled from "styled-components";

export const ListSmall = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItemSmall = styled.li`
  vertical-align: middle;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
`;

export const ListSmallIcon = styled.span`
  display: inline-flex;
  width: 16px;
  height: 16px;
  margin-right: 0.8rem;
`;

export const ListSmallIcon_Bookmark = styled(ListSmallIcon)`
  background: url("./images/item-icon.svg") center no-repeat;
`;
