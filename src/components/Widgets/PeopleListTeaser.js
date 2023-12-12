/**
 * People list component
 * Usually a teaser on the right hand side with list of people
 * 2023, Robert Koteles
 *
 * @param {Object} props.people - JSON object of people to show
 * @param {String} props.title - Title of the box
 * @param {String} props.subtitle - Subtitle of the box
 */

import React, { useEffect, useRef, useState } from "react";
import { Card, CardContainer } from "../_library/Cards";
import { ListHeader } from "../_library/Menus";
import DiscoverMore from "../Widgets/DiscoverMore";
import Avatar from "../User/Avatar";
import { UserAvatarList } from "../_library/User";
import ShowMore from "./ShowMore";

const PeopleListTeaser = (props) => {
  const [openedStatus, setOpenedStatus] = useState("closed");

  const people = props.people;
  const thisListRef = useRef();
  const maxItemsToShow = 2;

  const toggleView = (e) => {
    e.preventDefault();

    console.log("toggleView");

    setOpenedStatus(openedStatus === "closed" ? "open" : "closed");

    thisListRef.current.querySelectorAll("& > div").forEach((item, index) => {
      console.log(item);
      if (index >= maxItemsToShow) {
        item.classList.toggle("closed");
      }
    });
  };

  return (
    <Card>
      <CardContainer>
        <ListHeader>
          <a href="/demo">{props.title}</a>

          {props.subtitle && <span className="subtitle">{props.subtitle}</span>}
        </ListHeader>

        {!!people.length && (
          <>
            <UserAvatarList ref={thisListRef}>
              {people.map((item, index) => (
                <Avatar
                  user={item}
                  key={"widget-peoplemayknow-" + index}
                  classname={index >= maxItemsToShow ? "closed" : ""}
                />
              ))}
            </UserAvatarList>

            {people.length > maxItemsToShow && (
              <DiscoverMore
                title={["Show all", "Hide"]}
                link="#"
                classname={openedStatus}
                onclick={(e) => toggleView(e)}
              />
            )}
          </>
        )}
      </CardContainer>
    </Card>
  );
};

export default PeopleListTeaser;
