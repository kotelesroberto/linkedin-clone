import React, { useState } from "react";
import styled from "styled-components";
import { Card, CardContainer } from "../Common/Cards";
import { ListHeader } from "../Common/Menus";
import DiscoverMore from "../Widgets/DiscoverMore";
import Avatar from "../User/Avatar";
import { UserAvatarList } from "../Common/User";

const PeopleMayYouKnow = () => {
  const [openedStatus, setOpenedStatus] = useState("closed");

  // TODO: fetch from API later, as JSON object
  const people = [
    {
      name: "Janis Joplin",
      position: "Singer and story teller",
      avatar: "/images/avatar.svg",
      link: "/in/demo",
    },
    {
      name: "Jimi Hendrix",
      position:
        "American guitarist, songwriter and singer. Although his mainstream career spanned only four years, he is widely regarded as the greatest and one of the most influential electric guitarists in the history of popular music",
      avatar: "/images/avatar.svg",
      link: "/in/demo",
    },
    {
      name: "Eric Clapton",
      position: "Guitarist",
      avatar: "/images/avatar.svg",
      link: "/in/demo",
    },
    {
      name: "Superman",
      position: "(Clark Kent in incognito)",
      avatar: "/images/avatar.svg",
      link: "/in/demo",
    },
  ];

  const toggleView = (e) => {
    e.preventDefault();

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
          People you may know
          <span className="subtitle">From your company</span>
        </ListHeader>

        {!!people.length && (
          <>
            <UserAvatarList id="widget-people-may-know">
              {people.map((item, index) => (
                <Avatar user={item} key={"widget-peoplemayknow-" + index} />
              ))}
            </UserAvatarList>

            <DiscoverMore title="Show all" link="#" />
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

export default PeopleMayYouKnow;
