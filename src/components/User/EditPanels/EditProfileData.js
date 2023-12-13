import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import * as variables from "../../_library/Variables";


import { ButtonPrimary, ButtonSecondary } from "../../_library/Buttons";

import {
  getUserProfile,
  saveUserProfileChanges,
} from "../../../utils/userManagement";

import { UploadFile } from "../../../utils/firebaseFunctions";

// Editorial panels
import ProfileCardAvatar from "../../User/EditPanels/ProfileCardAvatar";
import ProfileCardCoverImage from "../../User/EditPanels/ProfileCardCoverImage";
import ProfileCardInfo from "../../User/EditPanels/ProfileCardInfo";
import ProfileCardAbout from "../../User/EditPanels/ProfileCardAbout";
import ProfileCardFeatured from "../../User/EditPanels/ProfileCardFeatured";
import ProfileCardActivity from "../../User/EditPanels/ProfileCardActivity";
import ProfileCardEducation from "../../User/EditPanels/ProfileCardEducation";
import ProfileCardExperience from "../../User/EditPanels/ProfileCardExperience";
import ProfileCardCertifications from "../../User/EditPanels/ProfileCardCertifications";
import ProfileCardSkills from "../../User/EditPanels/ProfileCardSkills";
import ProfileCardAwards from "../../User/EditPanels/ProfileCardAwards";
import ProfileCardLanguages from "../../User/EditPanels/ProfileCardLanguages";
import ProfileCardInterests from "../../User/EditPanels/ProfileCardInterests";

import { actionSetUserDataIntoStore } from "../../././../redux/actions/actions";

const EditProfileData = (props) => {
  const showModal = props.showModal;
  const closeModal = props.closeModal;
  const panelToEdit = props.panel.replace("edit-profile--", "");
  const user = props.user;

  // for storing user data
  const [profileUser, setProfileUser] = useState(props.user);

  // for storing upoaded file for avatar or cover image
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadedImagesOnServer, setUploadedImagesOnServer] = useState([]);

  // Get user
  useEffect(() => {
    if (user && user.uid) {
      getUserProfile(user.uid, true)
        .then((result) => {
          console.log("EditProfileData getUSerProfile result", result);
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
    let profileUserCopy = { ...profileUser };
    if (isExtraInfo) {
      profileUserCopy.extra[field] = e.target.value;
    } else {
      profileUserCopy[field] = e.target.value;
    }

    setProfileUser((prevStatus) => profileUserCopy);
  };

  // Click events
  const clickSaveChanges = (e) => {
    e.preventDefault();

    if (panelToEdit === "avatar") {
      upoadNewUserImage(e, "photoURL");
    } else if (panelToEdit === "coverimage") {
      upoadNewUserImage(e, "teaserImage");
    } else {
      // save changes into Firebase
      saveUserProfileChanges(profileUser, true).then((res) => {
        // need to update the user object in the main Redux store
        props.setUserDataIntoStore(profileUser);

        // close modal popup
        closeModal(e);
      });
    }
  };

  /**
   *
   * Physically upoad the new file to firease
   * @param {Event} e - Event
   * @param {string} fieldName - The name of the field of the document from the 'user' collection, such as "photoURL"
   *
   */
  const upoadNewUserImage = (e, fieldName) => {
    // Upload files and save into Firestore
    if (uploadedFiles.length) {
      uploadedFiles.map((item) => {
        // upload image
        UploadFile({
          folder: "images/user",
          imageAsFile: item,
          setUrl: (resp) => {
            // upload the image is successfull
            // add image to component state
            let temp = uploadedImagesOnServer.push({ imgUrl: resp });
            setUploadedImagesOnServer(temp);

            if (uploadedImagesOnServer.length === uploadedFiles.length) {
              // save the new filename into the user object
              let profileUserCopy = { ...profileUser };
              profileUserCopy[fieldName] = resp;
              setProfileUser(profileUserCopy);

              // save changes into Firebase
              saveUserProfileChanges(profileUserCopy, false).then((res) => {
                // need to update the user object in the main Redux store
                props.setUserDataIntoStore(profileUserCopy);

                // emptying component state
                setUploadedImagesOnServer([]);

                // close modal popup
                closeModal(e);
              });
            }
          },
        });
      });
    }
  };

  /**
   *
   * Manage button labels
   *
   */
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
            setuploadedfiles={setUploadedFiles}
          />
        )}
        {panelToEdit == "coverimage" && (
          <ProfileCardCoverImage
            user={profileUser}
            setuploadedfiles={setUploadedFiles}
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
        {panelToEdit == "experience" && (
          <ProfileCardExperience
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
    border: 1px solid ${variables.colors.border};
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
  background-color: ${variables.colorDefinitions.white};
  border-top: 1px solid ${variables.colors.border};
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
