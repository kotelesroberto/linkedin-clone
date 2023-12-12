/**
 * Component
 * Feed
 * Image(s) of the feed item
 * 2023, Robert Koteles
 */

import React from "react";
import { connect } from "react-redux";
import { actionSetShowModal } from "../../../../redux/actions/actions";

const FeedListItemImage = (props) => {
  const image = props.image;
  const setShowModal = props.setShowModal;

  let imageToShow = {
    url: image.url,
    alt: image.title,
  };

  const onClickView = (e) => {
    e.preventDefault();
    console.log("clicked: onClickView");
    setShowModal(`view-image`, imageToShow);
  };

  return (
    <a href={image.url} target="_blank">
      <img src={image.url} alt={image.title} onClick={onClickView} />
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
