import React from "react";
import styled from "styled-components";

import { Card, CardContainer } from "../../Common/Cards";
import {
  ListHeader,
  List,
  ListItemTitle,
  ListItemImpressum,
  ListItem,
  ListIcon_Info_After,
} from "../../Common/Menus";
import ProfileCardShowMore from "../../Widgets/ProfileCardShowMore";

const LatestNews = () => {
  return (
    <Card>
      <CardContainer>
        <ListHeader>
          LinkedIn News
          <ListIcon_Info_After></ListIcon_Info_After>
        </ListHeader>
        <List>
          <ListItem>
            <a href="">
              <ListItemTitle>How leaders can reduce burnout</ListItemTitle>
              <ListItemImpressum>2h ago • 346 readers</ListItemImpressum>
            </a>
          </ListItem>
          <ListItem>
            <a href="">
              <ListItemTitle>Startups react to OpenAI tumult</ListItemTitle>
              <ListItemImpressum>2h ago</ListItemImpressum>
            </a>
          </ListItem>
          <ListItem>
            <a href="">
              <ListItemTitle>What's new this Black Friday?</ListItemTitle>
              <ListItemImpressum>2h ago</ListItemImpressum>
            </a>
          </ListItem>
          <ListItem>
            <a href="">
              <ListItemTitle>Doctor Who boosts Welsh economy</ListItemTitle>
              <ListItemImpressum>2h ago</ListItemImpressum>
            </a>
          </ListItem>
          <ListItem>
            <a href="">
              <ListItemTitle>Spike in fake online stores</ListItemTitle>
              <ListItemImpressum>2h ago</ListItemImpressum>
            </a>
          </ListItem>
          <ListItem>
            <a href="">
              <ListItemTitle>Workers ready for green economy?</ListItemTitle>
              <ListItemImpressum>2h ago</ListItemImpressum>
            </a>
          </ListItem>
          <ListItem>
            <a href="">
              <ListItemTitle>Academic founders get a boost</ListItemTitle>
              <ListItemImpressum>2h ago</ListItemImpressum>
            </a>
          </ListItem>
        </List>
        <ProfileCardShowMore showOn="mobile-desktop" textAlign="left" />
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

export default LatestNews;
