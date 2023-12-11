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

import { actionSetUserDataIntoStore } from "../././../redux/actions/actions";

const EditProfileData = (props) => {
  const showModal = props.showModal;
  const closeModal = props.closeModal;

  const panelToEdit = props.panel.replace("edit-profile--", "");
  const user = props.user;

  const [profileUser, setProfileUser] = useState(props.user);

  useEffect(() => {
    if (user && user.uid) {
      getUserProfile(user.uid, true)
        .then((result) => {
          console.log("getUSerProfile EDIT result", result);
          setProfileUser({ ...result });

          if (user && user.uid && !!result.extra && !result.extra.id) {
            createUserExtraEntry(user.uid, true);
          }
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

  const clickSaveChanges = (e) => {
    // save changes into Firebase
    saveUserProfileChanges(profileUser.uid, profileUser).then((res) => {
      // need to update the user object in the main Redux store
      // TODO
      props.setUserDataIntoStore(profileUser);

      closeModal(e);
    });
  };

  return (
    <>
      ID: {profileUser.extra && profileUser.extra.id}
      <ContainerAside>
        {panelToEdit == "about" && (
          <textarea
            name=""
            id="postMessage"
            cols="30"
            rows="12"
            onChange={(e) => onChangeFormelement(e, true, "about")}
            value={profileUser.extra && profileUser.extra.about}
            autoFocus={true}
          ></textarea>
        )}
      </ContainerAside>
      <Footer>
        <ButtonRow>
          <ButtonPrimary onClick={(e) => closeModal(e)}>Cancel</ButtonPrimary>
          <ButtonSecondary onClick={(e) => clickSaveChanges(e)}>
            Save
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
