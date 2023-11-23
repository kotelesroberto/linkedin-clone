import React from "react";
import styled from "styled-components";
import ProfileCardCoverImage from "../../User/ProfileCardCoverImage";
import ProfileCardUserPhoto from "../../User/ProfileCardUserPhoto";
import ProfileCardUserInfo from "../../User/ProfileCardUserInfo";
import ProfileCardImpressions from "../../User/ProfileCardImpressions";
import ProfileCardMyItems from "../../User/ProfileCardMyItems";
import ProfileCardShowMore from "../../User/ProfileCardShowMore";

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
      <ProfileCardShowMore />
    </>
  );
};

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: rgba(140, 140, 140, 0.2) 0px 0px 0px 1px;
  transition-property: box-shadow;
  padding: 0;
  position: relative;
  overflow: hidden;
`;

export default ProfileCard;
