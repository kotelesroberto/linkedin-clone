import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { EditButton } from "../../_library/Buttons";
import { connect } from "react-redux";

import { actionSetShowModal } from "../../../redux/actions/actions";
import { imageLazyLoader } from "../../../utils/filename";

const ProfileCardCoverImage = (props) => {
  const user = props.user;
  const profileuser = props.profileuser;
  const isEditMode = props.iseditmode ? props.iseditmode : false;
  const isProfilePage = props.isprofilepage ? props.isprofilepage : false;
  const setShowModal = props.setShowModal;
  const imgRef = useRef();

  let imageToShow = {
    url: "/images/card-bg.svg",
    alt: "Gneral cover image",
  };

  if (profileuser && profileuser.teaserImage) {
    imageToShow.url = profileuser.teaserImage;
    imageToShow.alt = `Cover image of ${profileuser.displayName}`;
  }

  useEffect(() => {
    if (profileuser && profileuser.teaserImage && imgRef && imgRef.current) {
      imgRef.current.onload = () => {
        imgRef.current && imgRef.current.classList.add("loaded");
      };

      imageLazyLoader(imgRef, imageToShow.url).then((res) => {
        imgRef.current.src = imageToShow.url;
      });
    } else {
      if (imgRef && imgRef.current) {
        imgRef.current.src = imageToShow.url;
        imgRef.current && imgRef.current.classList.add("loaded");
      }
    }
  }, [profileuser]);

  const onClickEdit = (e) => {
    e.preventDefault();
    setShowModal(`edit-profile--coverimage`, imageToShow);
  };

  const onClickView = (e) => {
    e.preventDefault();
    setShowModal(`view-image`, imageToShow);
  };

  return (
    <CoverImage className={isProfilePage ? "big" : ""}>
      <CoverImageWrapper onClick={(e) => onClickView(e)}>
        <img
          src=""
          data-src={imageToShow.url}
          alt={imageToShow.alt}
          ref={imgRef}
          className="lazy"
        />
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
