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

  // TODO: fetch from API later, as JSON object
  const news = [
    {
      title: "How leaders can reduce burnout",
      timestamp: "2h ago",
      readers: 346,
      link: "/news/story/demo",
    },
    {
      title: "Startups react to OpenAI tumult",
      timestamp: "2h ago",
      readers: 1,
      link: "/news/story/demo",
    },
    {
      title: "What's new this Black Friday?",
      timestamp: "2h ago",
      readers: 1,
      link: "/news/story/demo",
    },
    {
      title: "Doctor Who boosts Welsh economy",
      timestamp: "2h ago",
      readers: 1,
      link: "/news/story/demo",
    },
    {
      title: "Spike in fake online stores",
      timestamp: "2h ago",
      readers: 1,
      link: "/news/story/demo",
    },
    {
      title: "Workers ready for green economy?",
      timestamp: "2h ago",
      readers: 1,
      link: "/news/story/demo",
    },
    {
      title: "Academic founders get a boost",
      timestamp: "2h ago",
      readers: 1,
      link: "/news/story/demo",
    },
  ];

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
          {!!news.length ? "LinkedIn News" : "Add to your feed"}
          <ListIcon_Info_After></ListIcon_Info_After>
        </ListHeader>

        {!!news.length && (
          <>
            <List id="linkedin-news">
              {news.map((item, index) => (
                <ListItem className={index > 4 ? "closed" : ""}>
                  <a href={item.link}>
                    <ListItemTitle>{item.title}</ListItemTitle>
                    <ListItemImpressum>
                      {item.timestamp} • {item.readers} readers
                    </ListItemImpressum>
                  </a>
                </ListItem>
              ))}
            </List>
            <ShowMore
              showon="mobile-desktop"
              textalign="left"
              onclickevent={toggleView}
              classname={openedStatus}
            />
          </>
        )}
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
