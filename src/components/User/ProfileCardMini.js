import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { Card } from "../Common/Cards";

import ProfileCardCoverImage from "./Panels/ProfileCardCoverImage";
import ProfileCardUserPhoto from "./Panels/ProfileCardUserPhoto";
import ProfileCardUserInfo from "./Panels/ProfileCardUserInfo";
import ProfileCardImpressions from "./Panels/ProfileCardImpressions";
import ProfileCardMyItems from "./Panels/ProfileCardMyItems";

import styled from "styled-components";
import { EditButton } from "../Common/Buttons";

import { getUserProfile } from "../../utils/userManagement";

const ProfileCardMini = (props) => {
  const [profileUser, setProfileUser] = useState({});

  // get user id of this profile. This is an uid, that belongs to this profile page
  const isEditMode = false;
  const isProfilePage = false;

  useEffect(() => {
    getUserProfile(props.user.uid, false)
      .then((result) => {
        setProfileUser({ ...result[0] });
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [props.user]);

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
        <ProfileCardImpressions
          userid={profileUser.uid ? profileUser.uid : ""}
        />
        <ProfileCardMyItems userid={profileUser.uid ? profileUser.uid : ""} />
      </ProfileCardContainer>
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

export default connect(mapStateToProps)(ProfileCardMini);
