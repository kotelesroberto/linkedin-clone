import React, { useEffect } from "react";
import DocumentTitle from "react-document-title";

import styled from "styled-components";
import { connect } from "react-redux";

import { useNavigate } from "react-router-dom";

import Header from "../components/Header/Header";
import Wall from "../components/Jobs/Wall/Wall";
import LeftCol from "../components/Jobs/LeftCol/LeftCol";
import RightCol from "../components/Jobs/RightCol/RightCol";

const JobsPage = (props) => {
  // at page load we need to check if user is were logged in. If not, navigate to the Login page
  const navigate = useNavigate();
  useEffect(() => {
    console.log("props.userprops.user", props.user);
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
      {props.user && (
        <Container>
          <Header />
          <Section>
            <LeftCol />
            <Wall />
            <RightCol />
          </Section>
        </Container>
      )}
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
  };
};

export default connect(mapStateToProps)(JobsPage);
