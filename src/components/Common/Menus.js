import styled from "styled-components";
import * as variables from "./Variables";

export const ListHeader = styled.h3`
  font-size: 16px;
  line-height: 1;
  color: ${variables.colors.colorFont};
  padding: 4px 0;
  margin: 0 0 12px 0;
  padding: 0px 12px;
  position: relative;

  a {
    color: ${variables.colors.menuLink};

    &:hover {
      color: ${variables.colors.menuLinkHover};
    }
  }

  span {
    &.subtitle {
      display: block;
      font-size: 14px;
      font-weight: 400;
      color: ${variables.colors.colorFont};
      margin: 4px 0;
    }
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  color: ${variables.colors.colorFont};
`;

export const ListItem = styled.li`
  vertical-align: middle;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  padding: 0px 12px;
  margin-bottom: 4px;
  position: relative;
  overflow: hidden;
  transition: max-height 0.3s, opacity 0.1s;
  max-height: 50px;
  opacity: 1;
  background-color: ${variables.colors.listItemBackground};

  &.closed {
    max-height: 0;
    opacity: 0;
    margin-bottom: 0;
  }

  &:before {
    content: "";
    border-radius: 50%;
    display: inline-block;
    width: 6px;
    height: 6px;
    margin: 10px 12px 2px 0px;
    border: 3px solid ${variables.colors.colorFont};
  }

  a {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    padding: 4px 0;
    display: block;

    &:hover {
      text-decoration: none;
    }
  }

  &:hover {
    background-color: ${variables.colors.listItemBackgroundHover};
  }
`;

export const ListItemTitle = styled.h3`
  color: ${variables.colors.colorFont};
  margin-bottom: 4px;

  &:hover {
    text-decoration: none;
    color: ${variables.colors.colorFont};
  }
`;

export const ListItemImpressum = styled.span`
  font-weight: 400;
`;

export const ListItemNoHover = styled(ListItem)`
  &:before {
    display: none;
  }

  &:hover {
    background-color: transparent;
  }
`;

export const ListSmall = styled(List)`
  list-style: none;
`;

export const ListSmallHeader = styled(ListHeader)`
  font-size: 12px;

  a {
    margin-top: 24px;
  }
`;

export const ListItemSmall = styled(ListItem)`
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 0px;
  padding-left: 12px;

  &:before {
    display: none;
  }
`;

export const ListItemSmallNoHover = styled(ListItemNoHover)``;

export const ListSmallIcon = styled.span`
  display: inline-flex;
  width: 16px;
  height: 16px;
  margin-right: 0.8rem;
  flex-shrink: 0;
`;

export const LIST_SMALL_ICON__BOOKMARK = styled(ListSmallIcon)`
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

export const ListSmallIcon_Plus_After = styled(ListSmallIcon)`
  background: url("./images/plus-icon.svg") center no-repeat;
  background-size: cover;
  position: absolute;
  top: 2px;
  right: 0;
  cursor: pointer;
`;

export const LISTICON_INFO_AFTER = styled(ListSmallIcon_Plus_After)`
  background: url("./images/feed-icon.svg") center no-repeat;
`;
