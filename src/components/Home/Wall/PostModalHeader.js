import React, { useCallback } from "react";
import styled from "styled-components";

import { ButtonActionContainer, ButtonAction } from "../../Common/Icons";
import ProfileCardWide from "../../User/ProfileCardWide";

const PostModalHeader = (props) => {
  const showModal = props.showModal;
  const closeModal = props.closeModal;
  const handleModalClick = props.handleModalClick;

  const headerToShow = useCallback((showModal) => {
    // 'addPost', 'addMedia', 'addEvent', 'addArticle'
    switch (showModal) {
      case "addPost":
        return <ProfileCardWide handleModalClick={handleModalClick} />;
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
  border-bottom: 1px solid rgba(140, 140, 140, 0.2);

  h2 {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.9);
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

export default PostModalHeader;
