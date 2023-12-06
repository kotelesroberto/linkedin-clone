import React, { useState } from "react";
import { Card } from "../Common/Cards";
import ProfileCardCoverImage from "./ProfileCardCoverImage";
import ProfileCardUserPhoto from "./ProfileCardUserPhoto";
import ProfileCardUserInfo from "./ProfileCardUserInfo";
import ProfileCardImpressions from "./ProfileCardImpressions";
import ProfileCardButtons from "./ProfileCardButtons";
import ProfileCardMyItems from "./ProfileCardMyItems";
import ProfileResources from "./ProfileResources";
import ShowMore from "../Widgets/ShowMore";
import styled from "styled-components";
import { EditButton } from "../Common/Buttons";

const ProfileCard = (props) => {
  const toggleView = () => {};

  const isEditMode = props.iseditmode ? props.iseditmode : false;
  const isProfilePage = props.isprofilepage ? props.isprofilepage : false;

  const onClickEdit = (e) => {
    e.preventDefault();
    console.log("onClickEdit");
  };

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

        {isProfilePage && isEditMode && (
          <LocalEditButton className="big" onClick={(e) => onClickEdit(e)} />
        )}
        {isProfilePage && <ProfileCardButtons />}

        {!isProfilePage && <ProfileCardImpressions />}
        {!isProfilePage && <ProfileCardMyItems />}
      </ProfileCardContainer>

      {isProfilePage && <ProfileResources iseditmode={isEditMode} />}

      {!isEditMode && <ShowMore showon="mobile" onclickevent={toggleView} />}
    </>
  );
};

const ProfileCardContainer = styled(Card)`
  overflow: visible;
  position: relative;
`;

const LocalEditButton = styled(EditButton)`
  z-index: 100;
  position: absolute;
  right: 12px;
  border: none;

  &.big {
    &:before {
      width: 20px;
      height: 20px;
    }
  }
`;

export default ProfileCard;
