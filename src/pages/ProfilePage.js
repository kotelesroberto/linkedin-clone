import React, { useEffect, useState } from "react";
import DocumentTitle from "react-document-title";

import styled from "styled-components";

import { useNavigate } from "react-router-dom";

import Header from "../components/Header/Header";
import LeftCol from "../components/Profile/LeftCol/LeftCol";
import RightCol from "../components/Profile/RightCol/RightCol";

import { connect } from "react-redux";
import { actionSetShowModal, setCurrentURLAPI } from "../redux/actions/actions";

const ProfilePage = (props) => {
  const showModal = props.showModal;
  const setShowModal = props.setShowModal;

  // at page load we need to check if user is were logged in. If not, navigate to the Login page
  const navigate = useNavigate();
  useEffect(() => {
    if (props.user && props.user.checkedByAuth) {
      if (!props.user.email) {
        const windowLocation = window.location.pathname;
        props.setCurrentURL(windowLocation);
        navigate("/");
      }
    }
  }, [props.user && props.user.checkedByAuth]);

  return (
    <DocumentTitle title={"(6) Feed | RuleX by Robert Koteles"}>
      <Container>
        <Header />
        <Section>
          <LeftCol />
          <RightCol />
        </Section>
      </Container>
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
    loadedURL: state.pageNavigationState.loadedURL,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setShowModal: (newPopupState) => {
      dispatch(actionSetShowModal(newPopupState));
    },
    setCurrentURL: (url) => {
      dispatch(setCurrentURLAPI(url));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
