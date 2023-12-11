/**
 *
 * Component: Languages
 * @desc This component is for showing the languages the user speaks
 * @author Robert Koteles
 * @version 1.0.0
 */

import React, { useRef, useState } from "react";
import ProfileCardBox from "./ProfileCardBox";
import ContentListItems from "./ContentListItems";
import DiscoverMore from "../../Widgets/DiscoverMore";

const ProfileCardLanguages = (props) => {
  const isEditMode = props.iseditmode ? props.iseditmode : false;
  const [openedStatus, setOpenedStatus] = useState("closed");
  const thisListRef = useRef();
  const maxItemsToShow = 2;

  const user = props.user;
  let languages =
    user && user.extra && user.extra.languages ? user.extra.languages : [];

  // As we use data with different keys in Friebase from what we need for <ContentListItems /> Component={, we need to transform keys by using a map transformation
  const keyMap = {
    title: "title", // Language
    title2: "level", // Description
  };

  let userLanguages = [];

  languages.map((awardItem) => {
    let userLanguageItem = {};

    for (const key in keyMap) {
      userLanguageItem[key] = awardItem[keyMap[key]];
    }

    userLanguages.push(userLanguageItem);
  });

  const contentToShow = [
    {
      title: "English",
      title2: "Professional working proficiency",
    },
    {
      title: "German",
      title2: "Elementary proficiency",
    },
  ];

  const toggleView = (e) => {
    e.preventDefault();

    setOpenedStatus(openedStatus === "closed" ? "open" : "closed");
    thisListRef.current.querySelectorAll("& > li").forEach((item, index) => {
      if (index >= maxItemsToShow) {
        item.classList.toggle("closed");
      }
    });
  };

  const extraButton = (
    <DiscoverMore
      title={["Show all languages", "Show all languages"]}
      link="#"
      onclick={(e) => toggleView(e)}
    />
  );

  return (
    <ProfileCardBox
      title="Languages"
      panel="languages"
      iseditmode={isEditMode}
      extrabutton={extraButton}
    >
      <ContentListItems
        items={userLanguages}
        parentRef={thisListRef}
        maxItemsToShow={maxItemsToShow}
      />
    </ProfileCardBox>
  );
};

export default ProfileCardLanguages;
