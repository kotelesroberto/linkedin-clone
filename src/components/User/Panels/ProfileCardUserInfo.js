import React from "react";
import styled from "styled-components";
import * as variables from "../../Common/Variables";
import ProfileCardEducationBox from "./ProfileCardEducationBox";
import ProfileCardLocation from "./ProfileCardLocation";

const ProfileCardUserInfo = (props) => {
  const user = props.user;
  const isEditMode = props.iseditmode ? props.iseditmode : false;
  const isProfilePage = props.isprofilepage ? props.isprofilepage : false;

  return (
    <UserCardInfo className={isProfilePage ? "profile" : ""}>
      {!user && (
        <UserCardIntro>
          <h3>Welcome, there!</h3>
          <span>Add a photo</span>
        </UserCardIntro>
      )}

      {user && (
        <>
          <UserCardName className={isProfilePage ? "profile" : ""}>
            <a href={`in/${user.shorturl}`}>
              {user && user.displayName
                ? user.displayName
                : "Me"}
            </a>
          </UserCardName>
          <UserCardDescription className={isProfilePage ? "profile" : ""}>
            <span>
              {user &&
                user.shortDescription &&
                user.shortDescription}
            </span>
            {isProfilePage && <ProfileCardEducationBox user={user} />}
          </UserCardDescription>

          {isProfilePage && <ProfileCardLocation user={user} />}
          {isProfilePage && (
            <UserCardConnections
              userid={user && user.uid ? user.uid : ""}
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
  border-bottom: 1px solid ${variables.colors.border2};
  padding: 0 12px;
  padding-bottom: 16px;

  &.profile {
    padding: 0px 24px;
    border: none;
    text-align: left;
  }
`;

const UserCardName = styled.h3`
  font-size: 16px;

  &.profile {
    font-size: 24px;
  }
`;

const UserCardDescription = styled.span`
  color: ${variables.colors.colorFont};
  font-size: 12px;
  line-height: 16px;
  display: block;
  margin-top: 4px;

  &.profile {
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
`;

const UserCardConnections = styled.div`
  color: ${variables.colors.link};
  font-weight: 700;
  font-size: 14px;
  margin-top: 8px;
`;

export default ProfileCardUserInfo;
