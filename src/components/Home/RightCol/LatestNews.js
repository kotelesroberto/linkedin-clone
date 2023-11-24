import React, { useState } from "react";
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
import ShowMore from "../../Widgets/ShowMore";

const LatestNews = () => {
  const [openedStatus, setOpenedStatus] = useState("closed");

  const toggleView = () => {
    setOpenedStatus(openedStatus === "closed" ? "open" : "closed");
    const newsList = document.getElementById("linkedin-news");
    newsList.querySelectorAll("li").forEach((item, index) => {
      if (index > 4) {
        item.classList.toggle("closed");
      }
    });
  };

  return (
    <Card>
      <CardContainer>
        <ListHeader>
          LinkedIn News
          <ListIcon_Info_After></ListIcon_Info_After>
        </ListHeader>
        <List id="linkedin-news">
          <ListItem>
            <a href="/news/story/demo">
              <ListItemTitle>How leaders can reduce burnout</ListItemTitle>
              <ListItemImpressum>2h ago • 346 readers</ListItemImpressum>
            </a>
          </ListItem>
          <ListItem>
            <a href="/news/story/demo">
              <ListItemTitle>Startups react to OpenAI tumult</ListItemTitle>
              <ListItemImpressum>2h ago</ListItemImpressum>
            </a>
          </ListItem>
          <ListItem>
            <a href="/news/story/demo">
              <ListItemTitle>What's new this Black Friday?</ListItemTitle>
              <ListItemImpressum>2h ago</ListItemImpressum>
            </a>
          </ListItem>
          <ListItem>
            <a href="/news/story/demo">
              <ListItemTitle>Doctor Who boosts Welsh economy</ListItemTitle>
              <ListItemImpressum>2h ago</ListItemImpressum>
            </a>
          </ListItem>
          <ListItem className="closed">
            <a href="/news/story/demo">
              <ListItemTitle>Spike in fake online stores</ListItemTitle>
              <ListItemImpressum>2h ago</ListItemImpressum>
            </a>
          </ListItem>
          <ListItem className="closed">
            <a href="/news/story/demo">
              <ListItemTitle>Workers ready for green economy?</ListItemTitle>
              <ListItemImpressum>2h ago</ListItemImpressum>
            </a>
          </ListItem>
          <ListItem className="closed">
            <a href="/news/story/demo">
              <ListItemTitle>Academic founders get a boost</ListItemTitle>
              <ListItemImpressum>2h ago</ListItemImpressum>
            </a>
          </ListItem>
        </List>
        <ShowMore
          showon="mobile-desktop"
          textalign="left"
          onclickevent={toggleView}
          classname={openedStatus}
        />
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
