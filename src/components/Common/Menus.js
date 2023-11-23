import styled from "styled-components";

export const ListSmallHeader = styled.h3`
  font-size: 12px;
  line-height: 1;
  color: rgba(0, 0, 0, 0.9);
  padding: 4px 0;
  margin-bottom: 12px;
  padding: 0px 12px;
`;

export const ListSmall = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  color: rgba(0, 0, 0, 0.9);
`;

export const ListItemSmall = styled.li`
  vertical-align: middle;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  padding: 0px 12px;

  a {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    color: rgba(0, 0, 0, 0.6);
    padding: 4px 0;

    &:hover {
      text-decoration: none;
      color: rgba(0, 0, 0, 0.9);
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

export const ListItemSmallNoHover = styled(ListItemSmall)`
  &:hover {
    background-color: transparent;
  }
`;

export const ListSmallIcon = styled.span`
  display: inline-flex;
  width: 16px;
  height: 16px;
  margin-right: 0.8rem;
  flex-shrink: 0;
`;

export const ListSmallIcon_Bookmark = styled(ListSmallIcon)`
  background: url("./images/item-icon.svg") center no-repeat;
  background-size: cover;
`;

export const ListSmallIcon_Group = styled(ListSmallIcon)`
  background: url("./images/nav-network.svg") center no-repeat;
  background-size: cover;
`;

export const ListSmallIcon_Empty = styled(ListSmallIcon)`
  background: none;
`;
