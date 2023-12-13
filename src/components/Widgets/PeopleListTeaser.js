/**
 * People list component
 * Usually a teaser on the right hand side with list of people
 * 2023, Robert Koteles
 *
 * @param {Object} props.items - JSON object of people to show
 * @param {String} props.title - Title of the box
 * @param {String} props.subtitle - Subtitle of the box
 */

import React, { useEffect, useRef, useState } from "react";
import { Card, CardContainer } from "../_library/Cards";
import { ListHeader } from "../_library/Menus";
import DiscoverMore from "../Widgets/DiscoverMore";
import Avatar from "../User/Avatar";
import { UserAvatarList } from "../_library/User";

const PeopleListTeaser = (props) => {
  const [openedStatus, setOpenedStatus] = useState("closed");

  const itemsToShow = props.items;
  const columns = props.columns ? props.columns : 1;
  const thisListRef = useRef();
  const maxItemsToShow = 2;

  const toggleView = (e) => {
    e.preventDefault();

    setOpenedStatus(openedStatus === "closed" ? "open" : "closed");

    thisListRef.current.querySelectorAll("& > div").forEach((item, index) => {
      if (index >= maxItemsToShow) {
        item.classList.toggle("closed");
      }
    });
  };

  return (
    <Card>
      <CardContainer>
        {props.title && (
          <ListHeader>
            <a href="/demo">{props.title}</a>

            {props.subtitle && (
              <span className="subtitle">{props.subtitle}</span>
            )}
          </ListHeader>
        )}

        {!!itemsToShow.length && (
          <>
            <UserAvatarList ref={thisListRef} className={`col-${columns}`}>
              {itemsToShow.map((item, index) => (
                <Avatar
                  user={item}
                  key={"widget-peoplelist-" + index}
                  classname={index >= maxItemsToShow ? "closed" : ""}
                />
              ))}
            </UserAvatarList>

            {itemsToShow.length > maxItemsToShow && (
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
