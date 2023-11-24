import React from "react";
import styled from "styled-components";
import { Card } from "../../Common/Cards";
import ProfileCardCoverImage from "../../User/ProfileCardCoverImage";
import ProfileCardUserPhoto from "../../User/ProfileCardUserPhoto";
import ProfileCardUserInfo from "../../User/ProfileCardUserInfo";
import ProfileCardImpressions from "../../User/ProfileCardImpressions";
import ProfileCardMyItems from "../../User/ProfileCardMyItems";
import ProfileCardShowMore from "../../Widgets/ProfileCardShowMore";

const ProfileCard = () => {
  return (
    <>
      <Card>
        <ProfileCardCoverImage />
        <ProfileCardUserPhoto />
        <ProfileCardUserInfo />
        <ProfileCardImpressions />
        <ProfileCardMyItems />
      </Card>
      <ProfileCardShowMore showOn="mobile" />
    </>
  );
};

export default ProfileCard;
