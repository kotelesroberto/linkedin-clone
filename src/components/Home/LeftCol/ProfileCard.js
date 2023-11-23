import React from "react";
import styled from "styled-components";
import ProfileCardCoverImage from "../../User/ProfileCardCoverImage";
import ProfileCardUserPhoto from "../../User/ProfileCardUserPhoto";
import ProfileCardUserInfo from "../../User/ProfileCardUserInfo";
import ProfileCardImpressions from "../../User/ProfileCardImpressions";
import ProfileCardPremium from "../../User/ProfileCardPremium";
import ProfileCardMyItems from "../../User/ProfileCardMyItems";

const ProfileCard = () => {
  return (
    <Card>
      <ProfileCardCoverImage />
      <a href="#">
        <ProfileCardUserPhoto />
        <ProfileCardUserInfo />
      </a>
        <ProfileCardImpressions />
        <ProfileCardPremium />
        <ProfileCardMyItems />
    </Card>
  );
};

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: rgba(140, 140, 140, 0.2) 0px 0px 0px 1px;
  transition-property: box-shadow;
  padding: 12px;
`;

export default ProfileCard;
