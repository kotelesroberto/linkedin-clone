import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { Card } from "../Common/Cards";

import ProfileCardCoverImage from "./Panels/ProfileCardCoverImage";
import ProfileCardUserPhoto from "./Panels/ProfileCardUserPhoto";
import ProfileCardUserInfo from "./Panels/ProfileCardUserInfo";
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

import { ReadContentFromFirebase } from "../../utils/firebaseFunctions";

// firebase related
import { db, auth } from "../../firebase/firebase";
import {
  collection,
  query,
  where,
  orderBy,
  getDocs,
  doc,
  onSnapshot,
} from "firebase/firestore";

const ProfileCard = (props) => {
  const toggleView = () => {};

  // get user id of this profile. This is an uid, that belongs to this profile page
  const profileUid = window.location.pathname.replace("/in/", "");

  let isEditMode =
    props.user && props.user.uid === profileUid ? props.iseditmode : false;
  const isProfilePage = props.isprofilepage ? props.isprofilepage : false;

  useEffect(() => {
    getUserProfile();
  }, [props.user]);

  const onClickEdit = (e) => {
    e.preventDefault();
    console.log("onClickEdit");
  };

  /**
   * Get all information that we need for displaying this user profile page
   * @param {String} puid - Profile User ID
   * @return {Object} All information of this profile page, as an object
   */
  const getUserProfile = (puid = "") => {
    let profilePageData = {};
    console.log("call: getUserProfile");

    // let options = {
    //   where: ["uid", "==", "PEsbNiszl8eqNeTM1HgP9Om9LYv1"],
    // };
    // ReadContentFromFirebase("users", options);

    return profilePageData;
  };

  return (
    <>
      <ProfileCardContainer>
        <ProfileCardCoverImage
          iseditmode={isEditMode}
          isprofilepage={isProfilePage}
          profileuid={profileUid}
        />
        <ProfileCardUserPhoto
          iseditmode={isEditMode}
          isprofilepage={isProfilePage}
          profileuid={profileUid}
        />
        <ProfileCardUserInfo
          iseditmode={isEditMode}
          isprofilepage={isProfilePage}
          profileuid={profileUid}
        />

        {isProfilePage && isEditMode && (
          <LocalEditButton className="big" onClick={(e) => onClickEdit(e)} />
        )}
        {isProfilePage && <ProfileCardButtons />}

        {!isProfilePage && <ProfileCardImpressions />}
        {!isProfilePage && <ProfileCardMyItems />}
      </ProfileCardContainer>

      {isProfilePage && isEditMode && (
        <ProfileCardResources iseditmode={isEditMode} profileuid={profileUid} />
      )}
      {isProfilePage && (
        <ProfileCardAbout iseditmode={isEditMode} profileuid={profileUid} />
      )}
      {isProfilePage && (
        <ProfileCardFeatured iseditmode={isEditMode} profileuid={profileUid} />
      )}
      {isProfilePage && (
        <ProfileCardActivity iseditmode={isEditMode} profileuid={profileUid} />
      )}
      {isProfilePage && (
        <ProfileCardExperience
          iseditmode={isEditMode}
          profileuid={profileUid}
        />
      )}
      {isProfilePage && (
        <ProfileCardEducation iseditmode={isEditMode} profileuid={profileUid} />
      )}
      {isProfilePage && (
        <ProfileCardCertifications
          iseditmode={isEditMode}
          profileuid={profileUid}
        />
      )}
      {isProfilePage && (
        <ProfileCardSkills iseditmode={isEditMode} profileuid={profileUid} />
      )}
      {isProfilePage && (
        <ProfileCardRecommendations
          iseditmode={isEditMode}
          profileuid={profileUid}
        />
      )}
      {isProfilePage && (
        <ProfileCardAwards iseditmode={isEditMode} profileuid={profileUid} />
      )}
      {isProfilePage && (
        <ProfileCardLanguages iseditmode={isEditMode} profileuid={profileUid} />
      )}
      {isProfilePage && (
        <ProfileCardInterests iseditmode={isEditMode} profileuid={profileUid} />
      )}

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

/*=====  React-redux related functions  ======*/

// any time the store is updated, mapStateToProps will be called. Expected to return an object
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(ProfileCard);
