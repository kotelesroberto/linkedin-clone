import React, { useEffect, useState } from "react";
import DocumentTitle from "react-document-title";

import styled from "styled-components";
import { connect } from "react-redux";

import { Navigate } from "react-router-dom";

import Header from "../components/Header/Header";
import Wall from "../components/Home/Wall/Wall";
import LeftCol from "../components/Home/LeftCol/LeftCol";
import RightCol from "../components/Home/RightCol/RightCol";
import PostModal from "../components/Home/Wall/PostModal";

const Home = (props) => {
  // 'addPost', 'addMedia', 'addEvent', 'addArticle'
  const [showModal, setShowModal] = useState("addPost");

  const handleModalClick = (e, newModalState = "") => {
    e.preventDefault();
    console.log("call: handleModalClick", newModalState);
    // if (e.target !== e.currentTarget) return;
    setShowModal(newModalState);
  };

  useEffect(() => {
    // user can close opened modal from keyboard (accessibility)
    document.addEventListener("keydown", (e) => {
      if (showModal && e.key === "Escape") {
        setShowModal("");
      }
    });
  }, []);

  return (
    <DocumentTitle title={"(6) Feed | LinkedIn by Robert Koteles"}>
      <>
        {!props.user && <Navigate to="/" replace />}
        <Container>
          <Header />
          <Section>
            <LeftCol />
            <Wall handleModalClick={handleModalClick} />
            <RightCol />
          </Section>

          <PostModal
            showModal={showModal}
            handleModalClick={handleModalClick}
          />
          { showModal }
        </Container>
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

  padding-bottom: 1000px;

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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
