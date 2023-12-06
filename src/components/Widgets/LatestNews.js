import React, { useState, useRef } from "react";
import { Card, CardContainer } from "../Common/Cards";
import {
  ListHeader,
  List,
  ListItemTitle,
  ListItemImpressum,
  ListItem,
  LISTICON_INFO_AFTER,
} from "../Common/Menus";
import ShowMore from "./ShowMore";

const LatestNews = () => {
  const [openedStatus, setOpenedStatus] = useState("closed");
  const maxItemsToShow = 4;
  const thisListRef = useRef();

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

  const toggleView = (e) => {
    e.preventDefault();

    setOpenedStatus(openedStatus === "closed" ? "open" : "closed");
    thisListRef.current.querySelectorAll("li").forEach((item, index) => {
      if (index > maxItemsToShow) {
        item.classList.toggle("closed");
      }
    });
  };

  return (
    <Card>
      <CardContainer>
        <ListHeader>
          LinkedIn News
          <LISTICON_INFO_AFTER></LISTICON_INFO_AFTER>
        </ListHeader>

        {!!news.length && (
          <>
            <List ref={thisListRef}>
              {news.map((item, index) => (
                <ListItem
                  className={index >= maxItemsToShow ? "closed" : ""}
                  key={"widget-latestnews-" + index}
                >
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

export default LatestNews;
