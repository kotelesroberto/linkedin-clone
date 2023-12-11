import React from "react";
import styled from "styled-components";
import {
  ListSmall,
  ListItemSmallNoHover,
  LIST_SMALL_ICON__BOOKMARK,
} from "../../Common/Menus";
import * as variables from "../../Common/Variables";

const ProfileCardMyItems = (props) => {
  const profileuid = props.profileuid;

  return (
    <Container>
      <ListSmall>
        <ListItemSmallNoHover>
          <LIST_SMALL_ICON__BOOKMARK></LIST_SMALL_ICON__BOOKMARK>
          My items
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
