import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { imageLazyLoader } from "../../../utils/filename";

const ShowImage = (props) => {
  const showModal = props.showModal;
  const closeModal = props.closeModal;
  const modalData = props.showModalData;
  const imgRef = useRef();

  useEffect(() => {
      imgRef.current.onload = () => {
        imgRef.current.classList.add("loaded");
      };

      imageLazyLoader(imgRef, modalData.url).then((res) => {
        imgRef.current.src = modalData.url;
      });
    
  }, []);

  return (
    <ImageContainer>
      <img
        src=""
        data-src={modalData.url}
        alt={modalData.alt}
        ref={imgRef}
        className="lazy"
      />
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
