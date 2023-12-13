import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { Card } from "../_library/Cards";

import ProfileCardCoverImage from "./Panels/ProfileCardCoverImage";
import ProfileCardUserPhoto from "./Panels/ProfileCardUserPhoto";
import ProfileCardUserInfo from "./Panels/ProfileCardUserInfo";
import ProfileCardImpressions from "./Panels/ProfileCardImpressions";
import ProfileCardMyItems from "./Panels/ProfileCardMyItems";

import styled from "styled-components";
import { EditButton } from "../_library/Buttons";

import { getUserProfile } from "../../utils/userManagement";

const ProfileCardMini = (props) => {
  const [profileUser, setProfileUser] = useState({});

  // get user id of this profile. This is an uid, that belongs to this profile page
  const isEditMode = false;
  const isProfilePage = false;
  const profileUid = props.user.uid;

  useEffect(() => {
    if (profileUid) {
      getUserProfile(profileUid, true)
        .then((result) => {
          setProfileUser((prevState) => result);
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  }, [props.user]);

  return (
    <>
      <ProfileCardContainer>
        <ProfileCardCoverImage
          iseditmode={isEditMode}
          isprofilepage={isProfilePage}
          profileuser={profileUser}
        />
        <ProfileCardUserPhoto
          iseditmode={isEditMode}
          isprofilepage={isProfilePage}
          profileuser={profileUser}
        />
        <ProfileCardUserInfo
          iseditmode={isEditMode}
          isprofilepage={isProfilePage}
          user={profileUser}
        />
        <ProfileCardImpressions
          userid={profileUser && profileUser.uid ? profileUser.uid : ""}
        />
        <ProfileCardMyItems
          userid={profileUser && profileUser.uid ? profileUser.uid : ""}
        />
      </ProfileCardContainer>
    </>
  );
};

const ProfileCardContainer = styled(Card)`
  overflow: visible;
  position: relative;
`;

/*=====  React-redux related functions  ======*/

// any time the store is updated, mapStateToProps will be called. Expected to return an object
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(ProfileCardMini);
