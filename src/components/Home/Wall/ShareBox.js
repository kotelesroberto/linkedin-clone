import styled from "styled-components";
import React from "react";

import { UserAvatarPhoto } from "../../_library/User";
import { ButtonSharePost } from "../../_library/Buttons";
import {
  ShareBoxContainer,
  ShareBoxWrapper,
  ShareBoxTop,
  ShareBoxButtons,
} from "../../_library/ShareBox";
import { connect } from "react-redux";

import {
  actionSetShowModal,
  actionSetPreviousShowModal,
} from "../../../redux/actions/actions";
import { useNavigate } from "react-router-dom";

const ShareBox = (props) => {
  const showModal = props.showModal;
  const setShowModal = props.setShowModal;

  const navigate = useNavigate();

  const doWriteArticle = (e) => {
    e.preventDefault();
    navigate("/demo");
  };

  return (
    <ShareBoxContainer>
      <ShareBoxWrapper>
        <ShareBoxTop>
          <UserAvatarPhoto>
            {props.user && props.user.photoURL ? (
              <img src={props.user.photoURL} alt={props.user.displayName} />
            ) : (
              <img src="/images/avatar.svg" alt="User avatar" />
            )}
          </UserAvatarPhoto>
          <ButtonSharePost onClick={(e) => setShowModal("addPost")}>
            Start a post
          </ButtonSharePost>
        </ShareBoxTop>
        <ShareBoxButtons>
          <button onClick={(e) => setShowModal("addMedia")}>
            <img src="/images/photo-icon.svg" alt="" />
            <span>Media</span>
          </button>
          <button onClick={(e) => setShowModal("addEvent")}>
            <img src="/images/calendar-icon.svg" alt="" />
            <span>Event</span>
          </button>
          <button onClick={(e) => doWriteArticle(e)}>
            <img src="/images/article-icon.svg" alt="" />
            <span>Write article</span>
          </button>
        </ShareBoxButtons>
      </ShareBoxWrapper>
    </ShareBoxContainer>
  );
};

/*=====  React-redux related functions  ======*/

// any time the store is updated, mapStateToProps will be called. Expected to return an object
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
    showModal: state.popupModalState.popupModal.showModal,
    previousShowModal: state.popupModalState.previousShowModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setShowModal: (newPopupState) => {
      dispatch(actionSetShowModal(newPopupState));
    },
    setPreviousShowModal: (prevPopupState) => {
      dispatch(actionSetPreviousShowModal(prevPopupState));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShareBox);
