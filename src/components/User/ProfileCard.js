import React, { useState } from "react";
import { Card } from "../Common/Cards";
import ProfileCardCoverImage from "./ProfileCardCoverImage";
import ProfileCardUserPhoto from "./ProfileCardUserPhoto";
import ProfileCardUserInfo from "./ProfileCardUserInfo";
import ProfileCardImpressions from "./ProfileCardImpressions";
import ProfileCardButtons from "./ProfileCardButtons";
import ProfileCardMyItems from "./ProfileCardMyItems";
import ShowMore from "../Widgets/ShowMore";
import styled from 'styled-components';

const ProfileCard = (props) => {
  const toggleView = () => {};

  const isEditMode = props.iseditmode ? props.iseditmode : false;
  const isProfilePage = props.isprofilepage ? props.isprofilepage : false;

  return (
    <>
      <ProfileCardContainer>
        <ProfileCardCoverImage
          iseditmode={isEditMode}
          isprofilepage={isProfilePage}
        />
        <ProfileCardUserPhoto
          iseditmode={isEditMode}
          isprofilepage={isProfilePage}
        />
        <ProfileCardUserInfo
          iseditmode={isEditMode}
          isprofilepage={isProfilePage}
        />

        {isProfilePage && <ProfileCardButtons />}

        {!isProfilePage && <ProfileCardImpressions />}
        {!isProfilePage && <ProfileCardMyItems />}
      </ProfileCardContainer>

      {!isEditMode && <ShowMore showon="mobile" onclickevent={toggleView} />}
    </>
  );
};

const ProfileCardContainer = styled(Card)`
  overflow: visible;
`;

export default ProfileCard;
