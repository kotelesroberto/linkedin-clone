import React from "react";
import styled from "styled-components";

import { Card, CardContainer } from "../../Common/Cards";
import {
  ListSmallHeader,
  ListSmall,
  ListItemSmall,
  ListSmallIcon_Group,
  ListSmallIcon_Empty,
  ListSmallIcon_Plus_After,
} from "../../Common/Menus";
import DiscoverMore from "../../Widgets/DiscoverMore";

const WidgetRecent = () => {
  // TODO: fetch from API later, as JSON object
  const groupRecent = [
    {
      title:
        "Developers - Android, iOS developer , Blockchain, Ethereum, Java, Ruby, .net, php, django, etc",
      link: "/groups/12345",
    },
    {
      title: "Senior Frontend Web Developer",
      link: "/groups/12345",
    },
    {
      title: "IT Jobs Group",
      link: "/groups/12345",
    },
    {
      title: "Parasol Employees' Network",
      link: "/groups/12345",
    },
    {
      title: "Front End Developer Group",
      link: "/groups/12345",
    },
  ];

  const groupGroups = groupRecent;

  return (
    <Card>
      {!!groupRecent.length && (
        <CardContainer>
          <ListSmallHeader>Recent</ListSmallHeader>
          <ListSmall id="group-recent">
            {groupRecent.map((item, index) => (
              <ListItemSmall key={ 'widget-recent-' + index }>
                <a href={item.link}>
                  <ListSmallIcon_Group></ListSmallIcon_Group>
                  {item.title}
                </a>
              </ListItemSmall>
            ))}
          </ListSmall>
        </CardContainer>
      )}

      {!!groupGroups.length && (
        <CardContainer>
          <ListSmallHeader>
            <a href="#">Groups</a>
          </ListSmallHeader>

          <ListSmall id="group-recent">
            {groupGroups.map((item, index) => (
              <ListItemSmall key={ 'widget-group-' + index }>
                <a href={item.link}>
                  <ListSmallIcon_Group></ListSmallIcon_Group>
                  {item.title}
                </a>
              </ListItemSmall>
            ))}
          </ListSmall>
        </CardContainer>
      )}

      <CardContainer>
        <ListSmallHeader>
          <a href="#">Events</a>
          <ListSmallIcon_Plus_After></ListSmallIcon_Plus_After>
        </ListSmallHeader>
      </CardContainer>
      <CardContainer>
        <ListSmallHeader>
          <a href="#">Followed Hashtags</a>
        </ListSmallHeader>
      </CardContainer>
      <DiscoverMore title="Discover more" link="#" />
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
