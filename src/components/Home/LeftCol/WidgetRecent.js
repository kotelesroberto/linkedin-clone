import React from "react";
import styled from "styled-components";

import { Card, CardContainer } from "../../Common/Cards";
import {
  ListSmallHeader,
  ListSmall,
  ListItemSmall,
  ListSmallIcon_Group,
  ListSmallIcon_Empty,
} from "../../Common/Menus";

const WidgetRecent = () => {
  return (
    <Card>
      <CardContainer>
        <ListSmallHeader>Recent</ListSmallHeader>
        <ListSmall>
          <ListItemSmall>
            <a href="">
              <ListSmallIcon_Group></ListSmallIcon_Group>
              Developers - Android, iOS developer , Blockchain, Ethereum, Java,
              Ruby, .net, php, django, etc
            </a>
          </ListItemSmall>
          <ListItemSmall>
            <a href="">
              <ListSmallIcon_Group></ListSmallIcon_Group>
              Senior Frontend Web Developer
            </a>
          </ListItemSmall>
          <ListItemSmall>
            <a href="">
              <ListSmallIcon_Group></ListSmallIcon_Group>
              IT JobsGroup
            </a>
          </ListItemSmall>
          <ListItemSmall>
            <a href="">
              <ListSmallIcon_Group></ListSmallIcon_Group>
              Front End Developer Group
            </a>
          </ListItemSmall>
        </ListSmall>
      </CardContainer>
      <CardContainer>
        <ListSmallHeader>Groups</ListSmallHeader>
        <ListSmall>
          <ListItemSmall>
            <a href="">
              <ListSmallIcon_Group></ListSmallIcon_Group>
              Developers - Android, iOS developer , Blockchain, Ethereum, Java,
              Ruby, .net, php, django, etc
            </a>
          </ListItemSmall>
          <ListItemSmall>
            <a href="">
              <ListSmallIcon_Group></ListSmallIcon_Group>
              Senior Frontend Web Developer
            </a>
          </ListItemSmall>
          <ListItemSmall>
            <a href="">
              <ListSmallIcon_Group></ListSmallIcon_Group>
              IT JobsGroup
            </a>
          </ListItemSmall>
          <ListItemSmall>
            <a href="">
              <ListSmallIcon_Group></ListSmallIcon_Group>
              Front End Developer Group
            </a>
          </ListItemSmall>
          <ListItemSmall>
            <a href="">
              <ListSmallIcon_Empty></ListSmallIcon_Empty>
              See all
            </a>
          </ListItemSmall>
        </ListSmall>
      </CardContainer>
    </Card>
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

export default WidgetRecent;
