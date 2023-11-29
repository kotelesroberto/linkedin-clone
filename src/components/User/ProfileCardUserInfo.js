import React from "react";
import styled from "styled-components";
import * as variables from "../Common/Variables";
import { connect } from "react-redux";

const ProfileCardUserInfo = (props) => {
  const profileSet = true;

  return (
    <UserCardInfo>
      {!profileSet && (
        <UserCardIntro>
          <h3>Welcome, there!</h3>
          <span>Add a photo</span>
        </UserCardIntro>
      )}

      {profileSet && (
        <>
          <UserCardName>
            <a href="https://www.linkedin.com/in/robertkoteles/">
              {props.user && props.user.displayName ? props.user.displayName : 'Me'}
            </a>
          </UserCardName>
          <UserCardDescription>
            Professional Senior Web Developer | Tech leader | Certified Scrum
            Developer | Musician | Human being (SC Cleared)
          </UserCardDescription>
        </>
      )}
    </UserCardInfo>
  );
};

const UserCardIntro = styled.div`
  h3 {
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.9);
    font-weight: 700;
  }
  span {
    font-size: 12px;
    color: ${variables.colors.blue};
    margin-top: 4px;
  }
`;

const UserCardInfo = styled.div`
  text-align: center;
  border-bottom: 1px solid rgba(140, 140, 140, 0.2);
  padding: 0 12px;
  padding-bottom: 16px;
`;

const UserCardName = styled.h3`
  font-size: 16px;
`;

const UserCardDescription = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
  line-height: 16px;
  display: block;
  margin-top: 4px;
`;

/*=====  React-redux related functions  ======*/

// any time the store is updated, mapStateToProps will be called. Expected to return an object
const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(ProfileCardUserInfo);
