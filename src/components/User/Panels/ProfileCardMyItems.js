import React from "react";
import styled from "styled-components";
import {
  ListSmall,
  ListItemSmallNoHover,
  LIST_SMALL_ICON__BOOKMARK,
} from "../../_library/Menus";
import * as variables from "../../_library/Variables";

const ProfileCardMyItems = (props) => {
  const profileuid = props.userid;

  return (
    <Container>
      <ListSmall>
        <ListItemSmallNoHover>
          <LIST_SMALL_ICON__BOOKMARK></LIST_SMALL_ICON__BOOKMARK>
          <a href="/demo">My items</a>
        </ListItemSmallNoHover>
      </ListSmall>
    </Container>
  );
};

const Container = styled.div`
  padding: 12px 0;
  cursor: pointer;
  margin-bottom: -12px;

  &:hover {
    background-color: ${variables.colors.listItemBackgroundHover};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default ProfileCardMyItems;
