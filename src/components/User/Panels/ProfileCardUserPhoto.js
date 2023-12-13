import React, { useEffect, useRef } from "react";
import { UserPhoto } from "../../_library/User";
import { connect } from "react-redux";
import styled from "styled-components";
import { EditButton } from "../../_library/Buttons";

import { actionSetShowModal } from "../../../redux/actions/actions";
import { imageLazyLoader } from "../../../utils/filename";

import * as variables from "../../_library/Variables";

const ProfileCardUserPhoto = (props) => {
  const user = props.user;
  const isEditMode = props.iseditmode ? props.iseditmode : false;
  const isProfilePage = props.isprofilepage ? props.isprofilepage : false;
  const setShowModal = props.setShowModal;
  const imgRef = useRef();

  let imageToShow = {
    url: "/images/avatar.svg",
    alt: "General avatar",
  };

  if (user && user && user.photoURL) {
    imageToShow.url = user.photoURL;
    imageToShow.alt = `Photo of ${user.displayName}`;
  }

  useEffect(() => {
    if (user && user.teaserImage) {
      imgRef.current.onload = () => {
        imgRef.current.classList.add("loaded");
      };

      imageLazyLoader(imgRef, imageToShow.url).then((res) => {
        imgRef.current.src = imageToShow.url;
      });
    }
  }, [user]);

  const onClickEdit = (e) => {
    e.preventDefault();
    console.log("clicked: onClickEdit");
    setShowModal(`edit-profile--avatar`, imageToShow);
  };

  const onClickView = (e) => {
    e.preventDefault();
    console.log("clicked: onClickView");
    setShowModal(`view-image`, imageToShow);
  };

  return (
    <UserPhotoContainer>
      <UserPhoto
        status="opentowork"
        className={isProfilePage ? "big" : ""}
        onClick={onClickView}
      >
        <img
          src=""
          data-src={imageToShow.url}
          alt={imageToShow.alt}
          ref={imgRef}
          className="lazy"
        />
      </UserPhoto>
      {isEditMode && <LocalEditButton onClick={(e) => onClickEdit(e)} />}
    </UserPhotoContainer>
  );
};

const LocalEditButton = styled(EditButton)`
  z-index: 10;
  position: absolute;
  top: 40px;
  left: 170px;
  border: none;
  background-color: ${variables.colorDefinitions.white};
`;

const UserPhotoContainer = styled.div`
  position: relative;
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
)(ProfileCardUserPhoto);
