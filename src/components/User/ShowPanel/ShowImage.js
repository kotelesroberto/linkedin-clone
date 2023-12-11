import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const ShowImage = (props) => {
  const showModal = props.showModal;
  const closeModal = props.closeModal;
  const modalData = props.showModalData;

  console.log("ShowImage showModal", showModal);
  console.log("ShowImage modalData", modalData);

  return (
    <ImageContainer>
      <img src={modalData.url} alt={modalData.alt} />
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  cursor: pointer;
  position: relative;

  img {
    max-width: 100%;
    height: auto;
    max-height: 70vh;
  }
`;

/*=====  React-redux related functions  ======*/

// any time the store is updated, mapStateToProps will be called. Expected to return an object
const mapStateToProps = (state) => {
  return {
    showModal: state.popupModalState.popupModal.showModal,
    showModalData: state.popupModalState.popupModal.payloadData,
  };
};

export default connect(mapStateToProps)(ShowImage);
