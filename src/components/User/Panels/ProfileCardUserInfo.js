import React from "react";
import styled from "styled-components";
import * as variables from "../../_library/Variables";
import ProfileCardEducationBox from "./ProfileCardEducationBox";
import ProfileCardLocation from "./ProfileCardLocation";

const ProfileCardUserInfo = (props) => {
  const user = props.user;
  const isEditMode = props.iseditmode ? props.iseditmode : false;
  const isProfilePage = props.isprofilepage ? props.isprofilepage : false;
  const panel = props.panel; // it's used on lfoating profile strip too

  const name = user && user && user.displayName ? user.displayName : "Me";

  let classes = "";
  if (panel) {
    classes = "panel";
  } else {
    classes = isProfilePage ? "profile" : "";
  }

  return (
    <UserCardInfo className={classes}>
      {!user && (
        <UserCardIntro>
          <h3>Welcome, there!</h3>
          <span>Add a photo</span>
        </UserCardIntro>
      )}

      {user && user && (
        <>
          <UserCardName>
            {isProfilePage ? name : <a href={`in/${user.shorturl}`}>{name}</a>}
          </UserCardName>
          <UserCardDescription>
            <span>
              {user && user && user.shortDescription && user.shortDescription}
            </span>
            {isProfilePage && <ProfileCardEducationBox user={user} />}
          </UserCardDescription>

          {isProfilePage && <ProfileCardLocation user={user} />}
          {isProfilePage && (
            <UserCardConnections
              userid={user && user && user.uid ? user.uid : ""}
            >
              391 connections
            </UserCardConnections>
          )}
        </>
      )}
    </UserCardInfo>
  );
};

const UserCardIntro = styled.div`
  h3 {
    font-size: 16px;
    line-height: 1.5;
    color: ${variables.colors.colorFont};
    font-weight: 700;
  }
  span {
    font-size: 12px;
    color: ${variables.colors.link};
    margin-top: 4px;
  }
`;

const UserCardInfo = styled.div`
  text-align: center;
  border-bottom: 1px solid ${variables.colors.border};
  padding: 0 12px;
  padding-bottom: 16px;

  &.profile {
    padding: 0px 24px;
    border: none;
    text-align: left;
  }

  &.panel {
    text-align: left;
    font-size: 14px;
    border: none;
    padding-bottom: 0;
    overflow: hidden;
  }
`;

const UserCardName = styled.h3`
  font-size: 16px;

  .profile & {
    font-size: 24px;
  }
  .panel & {
    font-size: 14px;
  }
`;

const UserCardDescription = styled.span`
  color: ${variables.colors.colorFont};
  font-size: 12px;
  line-height: 16px;
  display: block;
  margin-top: 4px;

  span {
    color: ${variables.colors.userCardDescription};
  }

  .profile & {
    color: ${variables.colors.colorFont};
    font-size: 16px;
    line-height: 1.3;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: space-around;

    span {
      width: 70%;
      margin-right: 20px;

      @media (max-width: 580px) {
        width: 100%;
      }
    }
  }

  .panel & {
    margin-top: 0;

    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: block;
    }
  }
`;

const UserCardConnections = styled.div`
  color: ${variables.colors.link};
  font-weight: 700;
  font-size: 14px;
  margin-top: 8px;
`;

export default ProfileCardUserInfo;
