import React, { useCallback } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import * as variables from "../../_library/Variables";

import { ButtonActionContainer, ButtonAction } from "../../_library/Icons";
import ProfileCardWide from "../../User/ProfileCardWide";

import {
  actionSetShowModal,
  actionSetPreviousShowModal,
} from "../../../redux/actions/actions";

const PostModalHeader = (props) => {
  const showModal = props.showModal;
  const closeModal = props.closeModal;

  const headerToShow = useCallback((showModal) => {
    // 'addPost', 'addMedia', 'addEvent', 'addArticle', 'is-posting', 'edit-profile--XXX'

    if (showModal.includes("edit-profile--")) {
      const panelEditText = showModal.replace("edit-profile--", "");
      return (
        <h2>
          Edit: {panelEditText.charAt(0).toUpperCase() + panelEditText.slice(1)}
        </h2>
      );
    }

    switch (showModal) {
      case "addPost":
        return <ProfileCardWide />;
        break;
      case "addMedia":
        return <h2>Editor</h2>;
        break;
      case "addEvent":
        return <h2>Create an event</h2>;
        break;
      case "setPostVisibility":
        return <h2>Post settings</h2>;
        break;
      case "is-posting":
        return <h2>Posting</h2>;
        break;

      default:
        return "";
        break;
    }
  }, []);

  return (
    <Header>
      <div>{headerToShow(showModal)}</div>
      <ClosePopupActions>
        <ClosePopupAction onClick={(e) => closeModal(e)}>
          <img
            src="/images/icon-close.svg"
            alt="Hide post"
            className="close-icon"
          />
        </ClosePopupAction>
      </ClosePopupActions>
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid ${variables.colors.border};

  h2 {
    font-size: 20px;
    color: ${variables.colors.colorFont};
  }
`;

const ClosePopupActions = styled(ButtonActionContainer)`
  /* pointer-events: none; */
`;

const ClosePopupAction = styled(ButtonAction)`
  img {
    &.close-icon {
      width: 20px;
      pointer-events: none;
    }
  }
`;

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

export default connect(mapStateToProps, mapDispatchToProps)(PostModalHeader);
