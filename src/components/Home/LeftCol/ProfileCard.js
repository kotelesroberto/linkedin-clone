import React from "react";
import styled from "styled-components";
import { Card } from "../../Common/Cards";
import ProfileCardCoverImage from "../../User/ProfileCardCoverImage";
import ProfileCardUserPhoto from "../../User/ProfileCardUserPhoto";
import ProfileCardUserInfo from "../../User/ProfileCardUserInfo";
import ProfileCardImpressions from "../../User/ProfileCardImpressions";
import ProfileCardMyItems from "../../User/ProfileCardMyItems";
import ShowMore from "../../Widgets/ShowMore";

const ProfileCard = () => {
  const toggleView = () => {};

  return (
    <>
      <Card>
        <ProfileCardCoverImage />
        <ProfileCardUserPhoto />
        <ProfileCardUserInfo />
        <ProfileCardImpressions />
        <ProfileCardMyItems />
      </Card>
      <ShowMore showon="mobile" onclickevent={toggleView}/>
    </>
  );
};

export default ProfileCard;
