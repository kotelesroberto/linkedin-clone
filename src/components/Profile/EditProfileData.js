import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import * as variables from "../Common/Variables";

import { ButtonPrimary, ButtonSecondary } from "../Common/Buttons";

import {
  getUserProfile,
  createUserExtraEntry,
  saveUserProfileChanges,
} from "../../utils/userManagement";

// Editorial panels
import ProfileCardAvatar from "../User/EditPanels/ProfileCardAvatar";
import ProfileCardCoverImage from "../User/EditPanels/ProfileCardCoverImage";
import ProfileCardInfo from "../User/EditPanels/ProfileCardInfo";
import ProfileCardAbout from "../User/EditPanels/ProfileCardAbout";
import ProfileCardFeatured from "../User/EditPanels/ProfileCardFeatured";
import ProfileCardActivity from "../User/EditPanels/ProfileCardActivity";
import ProfileCardEducation from "../User/EditPanels/ProfileCardEducation";
import ProfileCardCertifications from "../User/EditPanels/ProfileCardCertifications";
import ProfileCardSkills from "../User/EditPanels/ProfileCardSkills";
import ProfileCardAwards from "../User/EditPanels/ProfileCardAwards";
import ProfileCardLanguages from "../User/EditPanels/ProfileCardLanguages";
import ProfileCardInterests from "../User/EditPanels/ProfileCardInterests";

import { actionSetUserDataIntoStore } from "../././../redux/actions/actions";

const EditProfileData = (props) => {
  const showModal = props.showModal;
  const closeModal = props.closeModal;

  const panelToEdit = props.panel.replace("edit-profile--", "");
  const user = props.user;

  const [profileUser, setProfileUser] = useState(props.user);

  useEffect(() => {
    console.log({ profileUser });
  }, [profileUser]);

  // Get user
  useEffect(() => {
    if (user && user.uid) {
      getUserProfile(user.uid, true)
        .then((result) => {
          console.log("getUSerProfile EDIT result", result);
          setProfileUser({ ...result });
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  }, [props.user]);

  // General editorial function
  const onChangeFormelement = (e, isExtraInfo = false, field) => {
    e.preventDefault();
    const profileUserCopy = { ...profileUser };
    if (isExtraInfo) {
      profileUserCopy.extra[field] = e.target.value;
    } else {
      profileUserCopy[field] = e.target.value;
    }

    setProfileUser((prevStatus) => profileUserCopy);
  };

  // Click events
  const clickSaveChanges = (e) => {
    // save changes into Firebase
    saveUserProfileChanges(profileUser.uid, profileUser).then((res) => {
      // need to update the user object in the main Redux store
      props.setUserDataIntoStore(profileUser);

      // close modal popup
      closeModal(e);
    });
  };

  let saveButtonLabel = "Save";
  let cancelButtonLabel = "Cancel";

  switch (panelToEdit) {
    case "coverimage":
      saveButtonLabel = "Change image";
      break;
    case "avatar":
      saveButtonLabel = "Change user avatar";
      break;

    default:
      break;
  }

  return (
    <>
      <ContainerAside>
        {panelToEdit == "avatar" && (
          <ProfileCardAvatar
            user={profileUser}
            onchange={onChangeFormelement}
          />
        )}
        {panelToEdit == "coverimage" && (
          <ProfileCardCoverImage
            user={profileUser}
            onchange={onChangeFormelement}
          />
        )}
        {panelToEdit == "info" && (
          <ProfileCardInfo user={profileUser} onchange={onChangeFormelement} />
        )}
        {panelToEdit == "about" && (
          <ProfileCardAbout user={profileUser} onchange={onChangeFormelement} />
        )}

        {panelToEdit == "featured" && (
          <ProfileCardFeatured
            user={profileUser}
            onchange={onChangeFormelement}
          />
        )}
        {panelToEdit == "activity" && (
          <ProfileCardActivity
            user={profileUser}
            onchange={onChangeFormelement}
          />
        )}
        {panelToEdit == "education" && (
          <ProfileCardEducation
            user={profileUser}
            onchange={onChangeFormelement}
          />
        )}
        {panelToEdit == "certifications" && (
          <ProfileCardCertifications
            user={profileUser}
            onchange={onChangeFormelement}
          />
        )}
        {panelToEdit == "skills" && (
          <ProfileCardSkills
            user={profileUser}
            onchange={onChangeFormelement}
          />
        )}
        {panelToEdit == "awards" && (
          <ProfileCardAwards
            user={profileUser}
            onchange={onChangeFormelement}
          />
        )}
        {panelToEdit == "languages" && (
          <ProfileCardLanguages
            user={profileUser}
            onchange={onChangeFormelement}
          />
        )}
        {panelToEdit == "interests" && (
          <ProfileCardInterests
            user={profileUser}
            onchange={onChangeFormelement}
          />
        )}
      </ContainerAside>
      <Footer>
        <ButtonRow>
          <ButtonPrimary onClick={(e) => closeModal(e)}>
            {cancelButtonLabel}
          </ButtonPrimary>
          <ButtonSecondary onClick={(e) => clickSaveChanges(e)}>
            {saveButtonLabel}
          </ButtonSecondary>
        </ButtonRow>
      </Footer>
    </>
  );
};

const ContainerAside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  flex-grow: 1;
  padding: 16px 24px;

  textarea {
    width: 100%;
    border: 1px solid ${variables.colors.border4};
    outline: none;
    font-size: 20px;
    max-height: 400px;
    background-color: transparent;
    resize: none;
    /* height: auto; */
    padding: 10px;
    margin-bottom: 12px;
  }

  input {
    width: 100%;
    margin-bottom: 12px;
    padding: 10px;
  }

  label {
    width: 100%;
    text-align: left;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 4px;
  }
`;

const Footer = styled.div`
  width: 100%;
  background-color: ${variables.colors.white};
  border-top: 1px solid ${variables.colors.border2};
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 16px 24px;

  ${ButtonPrimary},
  ${ButtonSecondary} {
    width: auto;
    margin-bottom: 0;
    margin-left: 6px;

    &[disabled] {
      opacity: 0.4;
      pointer-events: none;
    }
  }
`;

/*=====  React-redux related functions  ======*/

// any time the store is updated, mapStateToProps will be called. Expected to return an object
const mapStateToProps = (state) => {
  console.log({ state });
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserDataIntoStore: (data) => {
      dispatch(actionSetUserDataIntoStore(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileData);
