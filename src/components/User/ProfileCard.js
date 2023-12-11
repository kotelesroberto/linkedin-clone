import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { Card } from "../Common/Cards";

import ProfileCardCoverImage from "./Panels/ProfileCardCoverImage";
import ProfileCardUserPhoto from "./Panels/ProfileCardUserPhoto";
import ProfileCardUserInfo from "./Panels/ProfileCardUserInfo";
import ProfileCardButtons from "./Panels/ProfileCardButtons";
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

import {
  actionSetShowModal,
  actionSetPreviousShowModal,
} from "../../redux/actions/actions";

import { getUserProfileID, getUserProfile } from "../../utils/userManagement";

const ProfileCard = (props) => {
  const [profileUser, setProfileUser] = useState({});

  const showModal = props.showModal;
  const previousShowModal = props.previousShowModal;
  const setShowModal = props.setShowModal;
  const setPreviousShowModal = props.setPreviousShowModal;

  const toggleView = () => {};

  // get user id of this profile. This is an uid, that belongs to this profile page
  const profileUid = getUserProfileID();

  let isEditMode =
    props.user && props.user.uid === profileUid ? props.iseditmode : false;
  const isProfilePage = props.isprofilepage ? props.isprofilepage : false;

  useEffect(() => {
    getUserProfile(profileUid, true)
      .then((result) => {
        console.log("getUserProfile RESULT", result);
        setProfileUser((prevState) => result);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [props.user]);

  const onClickEdit = (e) => {
    e.preventDefault();
    console.log("onClickEdit");
    setShowModal(`edit-profile--info`);
  };

  return (
    <>
      <ProfileCardContainer>
        <ProfileCardCoverImage
          iseditmode={isEditMode}
          isprofilepage={isProfilePage}
          user={profileUser}
        />
        <ProfileCardUserPhoto
          iseditmode={isEditMode}
          isprofilepage={isProfilePage}
          user={profileUser}
        />
        <ProfileCardUserInfo
          iseditmode={isEditMode}
          isprofilepage={isProfilePage}
          user={profileUser}
        />

        {isEditMode && (
          <LocalEditButton className="big" onClick={(e) => onClickEdit(e)} />
        )}
        <ProfileCardButtons user={profileUser} />
      </ProfileCardContainer>

      {isEditMode && profileUid == props.user.uid && (
        <ProfileCardResources iseditmode={isEditMode} profileuid={profileUid} />
      )}
      <ProfileCardAbout
        iseditmode={isEditMode}
        profileuid={profileUid}
        user={profileUser}
      />
      <ProfileCardFeatured iseditmode={isEditMode} profileuid={profileUid} />
      <ProfileCardActivity iseditmode={isEditMode} profileuid={profileUid} />
      {
        <ProfileCardExperience
          iseditmode={isEditMode}
          profileuid={profileUid}
          user={profileUser}
        />
      }
      <ProfileCardEducation
        iseditmode={isEditMode}
        profileuid={profileUid}
        user={profileUser}
      />

      <ProfileCardCertifications
        iseditmode={isEditMode}
        profileuid={profileUid}
        user={profileUser}
      />

      <ProfileCardSkills
        iseditmode={isEditMode}
        profileuid={profileUid}
        user={profileUser}
      />

      <ProfileCardRecommendations
        iseditmode={isEditMode}
        profileuid={profileUid}
        user={profileUser}
      />

      <ProfileCardAwards
        iseditmode={isEditMode}
        profileuid={profileUid}
        user={profileUser}
      />
      <ProfileCardLanguages
        iseditmode={isEditMode}
        profileuid={profileUid}
        user={profileUser}
      />
      <ProfileCardInterests
        iseditmode={isEditMode}
        profileuid={profileUid}
        user={profileUser}
      />

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
  console.log({ state });
  return {
    user: state.userState.user,
    showModal: state.popupModalState.popupModal.showModal,
    previousShowModal: state.popupModalState.popupModal.previousShowModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setShowModal: (newPopupState) => {
      dispatch(actionSetShowModal(newPopupState));
    },
    setPreviousShowModal: (prevPopupState) => {
      console.log("d setPreviousShowModal", prevPopupState);
      dispatch(actionSetPreviousShowModal(prevPopupState));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard);
