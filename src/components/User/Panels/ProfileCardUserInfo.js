import React from "react";
import styled from "styled-components";
import * as variables from "../../Common/Variables";
import { connect } from "react-redux";
import ProfileCardEducationBox from "../ProfileCardEducationBox";
import ProfileCardLocation from "../ProfileCardLocation";

const ProfileCardUserInfo = (props) => {
  const isEditMode = props.iseditmode ? props.iseditmode : false;
  const isProfilePage = props.isprofilepage ? props.isprofilepage : false;
  const profileUid = props.profileuid;

  return (
    <UserCardInfo className={isProfilePage ? "profile" : ""}>
      {!props.user && (
        <UserCardIntro>
          <h3>Welcome, there!</h3>
          <span>Add a photo</span>
        </UserCardIntro>
      )}

      {props.user && (
        <>
          <UserCardName className={isProfilePage ? "profile" : ""}>
            <a href={`in/${props.user.shorturl}`}>
              {props.user && props.user.displayName
                ? props.user.displayName
                : "Me"}
            </a>
          </UserCardName>
          <UserCardDescription className={isProfilePage ? "profile" : ""}>
            <span>
              Professional Senior Web Developer | Tech leader | Certified Scrum
              Developer | Musician | Human being (SC Cleared)
            </span>
            {isProfilePage && <ProfileCardEducationBox />}
          </UserCardDescription>

          {isProfilePage && <ProfileCardLocation />}
          {isProfilePage && (
            <UserCardConnections>391 connections</UserCardConnections>
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
    color: ${variables.colors.colorFonter};
    font-weight: 700;
  }
  span {
    font-size: 12px;
    color: ${variables.colors.maincolor1};
    margin-top: 4px;
  }
`;

const UserCardInfo = styled.div`
  text-align: center;
  border-bottom: 1px solid ${variables.colors.maincolor14};
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
    color: ${variables.colors.colorFonter};
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
  color: ${variables.colors.maincolor1};
  font-weight: 700;
  font-size: 14px;
  margin-top: 8px;
`;

/*=====  React-redux related functions  ======*/

// any time the store is updated, mapStateToProps will be called. Expected to return an object
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(ProfileCardUserInfo);
