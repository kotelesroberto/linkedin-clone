/**
 *
 * Component: Awards
 * @desc This component is for showing the user's awards
 * @author Robert Koteles
 * @version 1.0.0
 */

import React, { useState, useRef } from "react";
import ProfileCardBox from "./ProfileCardBox";
import ContentListItems from "./ContentListItems";
import DiscoverMore from "../../Widgets/DiscoverMore";
import styled from "styled-components";

const ProfileCardAwards = (props) => {
  const isEditMode = props.iseditmode ? props.iseditmode : false;
  const [openedStatus, setOpenedStatus] = useState("closed");
  const thisListRef = useRef();
  const maxItemsToShow = 1;

  const user = props.user;
  let awards = user && user.extra && user.extra.awards ? user.extra.awards : [];

  const createAssociated = (item) => {
    return (
      <Associated>
        <img src={item.icon} alt={item.name} />
        <span>{item.name}</span>
      </Associated>
    );
  };

  // As we use data with different keys in Friebase from what we need for <ContentListItems /> Component={, we need to transform keys by using a map transformation
  const keyMap = {
    title: "title", // NAme of the award
    content4: "info", // Description
  };

  let userAwards = [];

  awards.map((awardItem) => {
    let userAwardItem = {};

    for (const key in keyMap) {
      userAwardItem[key] = awardItem[keyMap[key]];
    }

    // date when user worked here
    userAwardItem.title2 = `Issued by ${awardItem.issueBy} · ${awardItem.issueDate}`;
    userAwardItem.content = createAssociated({
      name: "Company 1 name comes here",
      icon: "/images/home-logo.svg",
    });
    userAwards.push(userAwardItem);
  });

  const extraButton = (
    <DiscoverMore
      title={["Show all honors & awards", "Hide honors & awards"]}
      link="#"
      onclick={(e) => toggleView(e)}
    />
  );

  const toggleView = (e) => {
    e.preventDefault();

    setOpenedStatus(openedStatus === "closed" ? "open" : "closed");
    thisListRef.current.querySelectorAll("& > li").forEach((item, index) => {
      if (index >= maxItemsToShow) {
        item.classList.toggle("closed");
      }
    });
  };

  return (
    <ProfileCardBox
      title="Honors & awards"
      panel="awards"
      iseditmode={isEditMode}
      extrabutton={extraButton}
    >
      {userAwards.length && (
        <ContentListItems
          items={userAwards}
          parentRef={thisListRef}
          maxItemsToShow={maxItemsToShow}
        />
      )}
    </ProfileCardBox>
  );
};

const Associated = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;

  img {
    width: 24px;
    height: auto;
    margin-right: 12px;
  }

  span {
    font-size: 14px;
  }
`;

export default ProfileCardAwards;
