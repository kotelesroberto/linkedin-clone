import React from "react";
import styled from "styled-components";
import { EditButton } from "../../_library/Buttons";
import { connect } from "react-redux";

import {
  actionSetShowModal,
} from "../../../redux/actions/actions";

const ProfileCardCoverImage = (props) => {
  const user = props.user;
  const isEditMode = props.iseditmode ? props.iseditmode : false;
  const isProfilePage = props.isprofilepage ? props.isprofilepage : false;

  const setShowModal = props.setShowModal;

  let imageToShow = {
    url: "/images/card-bg.svg",
    alt: "Gneral cover image",
  };
  if (user && user && user.teaserImage) {
    imageToShow.url = user.teaserImage;
    imageToShow.alt = `Cover image of ${user.displayName}`;
  }

  const onClickEdit = (e) => {
    e.preventDefault();
    console.log("clicked: onClickEdit");
    setShowModal(`edit-profile--coverimage`, imageToShow);
  };

  const onClickView = (e) => {
    e.preventDefault();
    console.log("clicked: onClickView");
    setShowModal(`view-image`, imageToShow);
  };

  return (
    <CoverImage className={isProfilePage ? "big" : ""}>
      <CoverImageWrapper onClick={(e) => onClickView(e)}>
        <img src={imageToShow.url} alt={imageToShow.alt} />
      </CoverImageWrapper>
      {isEditMode && <LocalEditButton onClick={(e) => onClickEdit(e)} />}
    </CoverImage>
  );
};

const CoverImage = styled.div`
  height: 52px;
  margin: -12px 0 0px;
  background: url("images/card-bg.svg") center no-repeat;
  background-size: cover;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  z-index: 1;

  &.big {
    height: 200px;
    margin: -12px 0 0;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const CoverImageWrapper = styled.div`
  position: relative;
`;

const LocalEditButton = styled(EditButton)`
  z-index: 10;
  position: absolute;
  top: 12px;
  right: 12px;
  border: none;
`;

/*=====  React-redux related functions  ======*/

// any time the store is updated, mapStateToProps will be called. Expected to return an object
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setShowModal: (newPopupState, payloadData) => {
      dispatch(actionSetShowModal(newPopupState, payloadData));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileCardCoverImage);
