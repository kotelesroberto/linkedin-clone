import React from "react";
import styled from "styled-components";
import {
  ListSmall,
  ListItemSmall,
  ListSmallIcon_Bookmark,
} from "../Common/Menus";

const ProfileCardMyItems = () => {
  return (
    <Container>
      <ListSmall>
        <ListItemSmall>
          <ListSmallIcon_Bookmark></ListSmallIcon_Bookmark>
          My items
        </ListItemSmall>
      </ListSmall>
    </Container>
  );
};

const Container = styled.div`
  padding: 12px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default ProfileCardMyItems;
