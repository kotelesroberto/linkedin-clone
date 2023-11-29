import React from "react";
import DocumentTitle from "react-document-title";

import styled from "styled-components";
import { connect } from "react-redux";

import { Navigate } from "react-router-dom";

import Header from "../components/Header/Header";
import Wall from "../components/Home/Wall/Wall";
import LeftCol from "../components/Home/LeftCol/LeftCol";
import RightCol from "../components/Home/RightCol/RightCol";

const Home = (props) => {
  return (
    <DocumentTitle title={"(6) Feed | LinkedIn by Robert Koteles"}>
      <>
        {!props.user && <Navigate to="/" replace />}
        <Container>
          <Header />
          <Section>
            <LeftCol />
            <Wall />
            <RightCol />
          </Section>
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
