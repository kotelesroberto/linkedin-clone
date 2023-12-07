import React, { useState } from "react";
import { Card } from "../Common/Cards";

import ProfileCardCoverImage from "./ProfileCardCoverImage";
import ProfileCardUserPhoto from "./ProfileCardUserPhoto";
import ProfileCardUserInfo from "./ProfileCardUserInfo";
import ProfileCardImpressions from "./Panels/ProfileCardImpressions";
import ProfileCardButtons from "./ProfileCardButtons";
import ProfileCardMyItems from "./ProfileCardMyItems";

import ProfileCardResources from "./Panels/ProfileCardResources";
import ProfileCardAbout from "./Panels/ProfileCardAbout";
import ProfileCardFeatured from "./Panels/ProfileCardFeatured";
import ProfileCardActivity from "./Panels/ProfileCardActivity";
import ProfileCardExperience from "./Panels/ProfileCardExperience";
import ProfileCardEducation from "./Panels/ProfileCardEducation";
import ProfileCardCertifications from "./Panels/ProfileCardCertifications";
import ProfileCardSkills from "./Panels/ProfileCardSkills";
import ProfileCardRecommendations from "./Panels/ProfileCardRecommendations";
import ProfileCardAwards from "./Panels/ProfileCardAwards";
import ProfileCardLanguages from "./Panels/ProfileCardLanguages";
import ProfileCardInterests from "./Panels/ProfileCardInterests";

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

      {isProfilePage && isEditMode && <ProfileCardResources iseditmode={isEditMode} />}
      {isProfilePage && <ProfileCardAbout iseditmode={isEditMode} />}
      {isProfilePage && <ProfileCardFeatured iseditmode={isEditMode} />}
      {isProfilePage && <ProfileCardActivity iseditmode={isEditMode} />}
      {isProfilePage && <ProfileCardExperience iseditmode={isEditMode} />}
      {isProfilePage && <ProfileCardEducation iseditmode={isEditMode} />}
      {isProfilePage && <ProfileCardCertifications iseditmode={isEditMode} />}
      {isProfilePage && <ProfileCardSkills iseditmode={isEditMode} />}
      {isProfilePage && <ProfileCardRecommendations iseditmode={isEditMode} />}
      {isProfilePage && <ProfileCardAwards iseditmode={isEditMode} />}
      {isProfilePage && <ProfileCardLanguages iseditmode={isEditMode} />}
      {isProfilePage && <ProfileCardInterests iseditmode={isEditMode} />}

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
