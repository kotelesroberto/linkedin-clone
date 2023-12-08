



import React, { useEffect, useState } from "react";
import DocumentTitle from "react-document-title";

import styled from "styled-components";
import { connect } from "react-redux";

import { Navigate } from "react-router-dom";

import Header from "../components/Header/Header";
import LeftCol from "../components/Profile/LeftCol/LeftCol";
import RightCol from "../components/Profile/RightCol/RightCol";

import { setShowModalAPI } from "../redux/actions/actions";

const ProfilePage = (props) => {
  const showModal = props.showModal;
  const setShowModal = props.setShowModal;

  useEffect(() => {
    // user can close opened modal from keyboard (accessibility)
    document.addEventListener("keydown", (e) => {
      if (showModal && e.key === "Escape") {
        setShowModal("");
      }
    });
  }, []);

  return (
    <DocumentTitle title={"(6) Feed | LinkedX by Robert Koteles"}>
      <>
        {/* {!props.user && <Navigate to="/" replace />} */}
        {props.user && (
          <Container>
            <Header />
            <Section>
              <LeftCol />
              <RightCol />
            </Section>
          </Container>
        )}
      </>
    </DocumentTitle>
  );
};

const Container = styled.div`
  margin: auto;
  width: 100%;
  padding: 0 24px;
  padding-top: 52px;
`;

const Section = styled.section`
  margin: 0 auto;
  width: 100%;
  max-width: 1128px;
  padding: 24px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    max-width: 576px;
  }
`;

/*=====  React-redux related functions  ======*/

// any time the store is updated, mapStateToProps will be called. Expected to return an object
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
    showModal: state.popupModalState.popupModal.showModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setShowModal: (newPopupState) => {
      dispatch(setShowModalAPI(newPopupState));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
