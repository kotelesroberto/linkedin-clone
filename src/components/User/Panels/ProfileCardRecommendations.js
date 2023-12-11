/**
 *
 * Component: Recommendations
 * @desc This component is for showing the user's recommendations by other users
 * @author Robert Koteles
 * @version 1.0.0
 */

import React, { useRef, useState } from "react";
import ProfileCardBox from "./ProfileCardBox";
import ContentListItems from "./ContentListItems";
import DiscoverMore from "../../Widgets/DiscoverMore";

import { recommendations as demoRecommendations } from "../../../utils/demoData";

const ProfileCardRecommendations = (props) => {
  const isEditMode = false;
  const [openedStatus, setOpenedStatus] = useState("closed");
  const thisListRef = useRef();
  const maxItemsToShow = 3;

  const onClickEdit = (e) => {
    e.preventDefault();
    console.log("onClickEdit");
  };

  const extraButton = (
    <DiscoverMore
      title={["Show all recommendations", "Hide recommendations"]}
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
      title="Recommendations"
      onclickedit={onClickEdit}
      iseditmode={isEditMode}
      extrabutton={extraButton}
    >
      <ContentListItems
        items={demoRecommendations}
        parentRef={thisListRef}
        maxItemsToShow={maxItemsToShow}
      />
    </ProfileCardBox>
  );
};

export default ProfileCardRecommendations;
