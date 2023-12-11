/**
 *
 * Component: Experience
 * @desc This component is for showing the user's working history, experience
 * @author Robert Koteles
 * @version 1.0.0
 */

import React, { useState, useRef } from "react";
import ProfileCardBox from "./ProfileCardBox";
import ContentListItems from "./ContentListItems";
import DiscoverMore from "../../Widgets/DiscoverMore";

const ProfileCardExperience = (props) => {
  const isEditMode = props.iseditmode ? props.iseditmode : false;
  const [openedStatus, setOpenedStatus] = useState("closed");
  const thisListRef = useRef();
  const maxItemsToShow = 2;

  const user = props.user;
  let experiences =
    user && user.extra && user.extra.experience ? user.extra.experience : [];

  // As we use data with different keys in Friebase from what we need for <ContentListItems /> Component={, we need to transform keys by using a map transformation
  const keyMap = {
    image: "logo", // Image of the company
    title: "position", // Position
    title2: "name", // Name of company
    title3: "from", // Year range
    title4: "location", //  Location
    content2: "info", // Info
    content3: "skills", // skills
  };

  let userExperiences = [];

  experiences.map((experienceItem) => {
    let userExperienceItem = {};
    for (const key in keyMap) {
      // if the key value is an array, convert into string to display on the page
      if (
        Object.prototype.toString.call(experienceItem[keyMap[key]]) ===
        "[object Array]"
      ) {
        userExperienceItem[key] = experienceItem[keyMap[key]].join(", ");
      } else {
        userExperienceItem[key] = experienceItem[keyMap[key]];
      }
    }

    // date when user worked here
    userExperienceItem.title3 = `${experienceItem.from} - ${experienceItem.to}`;
    userExperiences.push(userExperienceItem);
  });

  const extraButton = (
    <DiscoverMore
      title={["Show all experiences", "Show all experiences"]}
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
      title="Experience"
      panel="experience"
      iseditmode={isEditMode}
      extrabutton={extraButton}
    >
      {userExperiences.length && (
        <ContentListItems
          items={userExperiences}
          parentRef={thisListRef}
          maxItemsToShow={maxItemsToShow}
        />
      )}
    </ProfileCardBox>
  );
};

export default ProfileCardExperience;
