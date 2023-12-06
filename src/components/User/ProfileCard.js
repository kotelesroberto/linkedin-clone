import React, { useState } from "react";
import { Card } from "../Common/Cards";
import ProfileCardCoverImage from "./ProfileCardCoverImage";
import ProfileCardUserPhoto from "./ProfileCardUserPhoto";
import ProfileCardUserInfo from "./ProfileCardUserInfo";
import ProfileCardImpressions from "./ProfileCardImpressions";
import ProfileCardMyItems from "./ProfileCardMyItems";
import ShowMore from "../Widgets/ShowMore";

const ProfileCard = (props) => {
  const toggleView = () => {};

  const isEditMode = props.isEditMode ? props.isEditMode : false;

  return (
    <>
      {!isEditMode && (
        <>
          <Card>
            <ProfileCardCoverImage />
            <ProfileCardUserPhoto />
            <ProfileCardUserInfo />
            <ProfileCardImpressions />
            <ProfileCardMyItems />
          </Card>
          <ShowMore showon="mobile" onclickevent={toggleView} />
        </>
      )}
    </>
  );
};

export default ProfileCard;
