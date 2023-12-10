import React, { useState } from "react";
import styled from "styled-components";
import { UserPhoto } from "../Common/User";
import * as variables from "../Common/Variables";
import { connect } from "react-redux";
import { setPostVisibilityAPI } from "../../redux/actions/actions";

const ProfileCardWide = (props) => {
  const displayName = props.user
    ? props.user.displayName
      ? props.user.displayName
      : "Me"
    : "Me";

  const clickContainer = (e) => {
    props.setPostVisibility(e);
  };

  return (
    <Container onClick={(e) => clickContainer(e)}>
      <UserPhoto status="opentowork">
        {props.user && props.user.photoURL ? (
          <img src={props.user.photoURL} alt={props.user.displayName} />
        ) : (
          <img src="/images/avatar.svg" alt="User avatar" />
        )}
      </UserPhoto>
      <RightCol>
        <h2>{displayName}</h2>
        <span>Post to {props.postSetting.visibiity}</span>
        <RightColIcon>
          <img
            src="/images/arrow-down-small.svg"
            alt="Change visibility of the post"
            aria-label="Change visibility of the post"
            className="icon-arrow"
          />
        </RightColIcon>
      </RightCol>
    </Container>
  );
};

const Container = styled.div`
  border-radius: ${variables.borderRadius};
  padding: 12px;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;

  &:hover {
    box-shadow: ${variables.colors.boxShadow};
    background-color: ${variables.colors.listItemBackgroundHover};
  }

  ${UserPhoto} {
    margin-top: 0;
    margin-right: 4px;
    margin-bottom: 0;
  }
`;

const RightCol = styled.div`
  padding-left: 8px;
  padding-right: 28px;
  position: relative;

  span {
    font-size: 14px;
  }
`;

const RightColIcon = styled.div`
  position: absolute;
  right: 0;
  top: 0px;

  img {
    width: 24px;
    height: auto;
  }
`;

/*=====  React-redux related functions  ======*/

// any time the store is updated, mapStateToProps will be called. Expected to return an object
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
    postSetting: state.postSettingState.postSetting,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPostVisibility: (e) => {
      e.preventDefault();
      dispatch(setPostVisibilityAPI(e, "Friends"));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCardWide);
