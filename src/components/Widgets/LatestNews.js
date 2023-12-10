import React, { useState, useRef, useEffect } from "react";
import Moment from "react-moment";
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

  useEffect(() => {
    // Start the pooled timer which runs every 60 seconds
    // (60000 milliseconds) by default.
    Moment.startPooledTimer();
  }, []);

  // TODO: fetch from API later, as JSON object
  const news = [
    {
      title: "How leaders can reduce burnout",
      timestamp: 1701610132621,
      readers: 346,
      link: "/news/story/demo",
    },
    {
      title: "Startups react to OpenAI tumult",
      timestamp: 1701672333821,
      readers: 1,
      link: "/news/story/demo",
    },
    {
      title: "What's new this Black Friday?",
      timestamp: 1701930862631,
      readers: 1,
      link: "/news/story/demo",
    },
    {
      title: "Doctor Who boosts Welsh economy",
      timestamp: 1701910862631,
      readers: 1,
      link: "/news/story/demo",
    },
    {
      title: "Spike in fake online stores",
      timestamp: 1701930862631,
      readers: 1,
      link: "/news/story/demo",
    },
    {
      title: "Workers ready for green economy?",
      timestamp: 1701930862631,
      readers: 1,
      link: "/news/story/demo",
    },
    {
      title: "Academic founders get a boost",
      timestamp: 1701930862631,
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
          RuleX News
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
                      <Moment fromNow>{new Date(item.timestamp)}</Moment> •{" "}
                      {item.readers} readers
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
