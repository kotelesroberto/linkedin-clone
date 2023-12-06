import React, { useEffect, useState } from "react";
import DocumentTitle from "react-document-title";

import styled from "styled-components";
import { connect } from "react-redux";

import { Navigate, useNavigate } from "react-router-dom";

import Header from "../components/Header/Header";
import Wall from "../components/Home/Wall/Wall";
import LeftCol from "../components/Home/LeftCol/LeftCol";
import RightCol from "../components/Home/RightCol/RightCol";
import PostModal from "../components/Home/Wall/PostModal";

import { setShowModalAPI, setCurrentURLAPI } from "../redux/actions/actions";

const Home = (props) => {
  const showModal = props.showModal;
  const setShowModal = props.setShowModal;
  const navigate = useNavigate();

  useEffect(() => {
    // user can close opened modal from keyboard (accessibility)
    document.addEventListener("keydown", (e) => {
      if (showModal && e.key === "Escape") {
        setShowModal("");
      }
    });
  }, []);

  useEffect(() => {
    if (!props.user) {
      const windowLocation = window.location.pathname;
      props.setCurrentURL(windowLocation);
      navigate(props.loadedURL);
    }
  }, [props.user]);

  return (
    <DocumentTitle title={"(6) Feed | LinkedIn by Robert Koteles"}>
      <>
        {/* {!props.user && <Navigate to="/" replace />} */}
        {props.user && (
          <Container>
            <Header />
            <Section>
              <LeftCol />
              <Wall />
              <RightCol />
            </Section>
            <PostModal />
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
    loadedURL: state.pageNavigationState.loadedURL
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setShowModal: (newPopupState) => {
      dispatch(setShowModalAPI(newPopupState));
    },
    setCurrentURL: (url) => {
      dispatch(setCurrentURLAPI(url));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
