/**
 * Component
 * Feed
 * Image(s) of the feed item
 * 2023, Robert Koteles
 */

import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { actionSetShowModal } from "../../../../redux/actions/actions";
import { imageLazyLoader } from "../../../../utils/filename";

const FeedListItemImage = (props) => {
  const image = props.image;
  const setShowModal = props.setShowModal;

  const imgRef = useRef();
  const imageToShow = {
    url: image.url,
    alt: image.title,
  };

  useEffect(() => {
    imageLazyLoader(imgRef, imageToShow.url).then((res) => {
      imgRef.current.onload = () => {
        imgRef.current && imgRef.current.classList.add("loaded");
      };
      imgRef.current.src = imageToShow.url;
    });
  }, []);

  const onClickView = (e) => {
    e.preventDefault();
    console.log("clicked: onClickView");
    setShowModal(`view-image`, imageToShow);
  };

  return (
    <a href={imageToShow.url} target="_blank">
      <img
        src=""
        data-src={imageToShow.url}
        alt={imageToShow.alt}
        onClick={onClickView}
        ref={imgRef}
        className="lazy"
      />
    </a>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(FeedListItemImage);
