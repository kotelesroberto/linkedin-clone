import styled from "styled-components";

import React from "react";
import Header from "../components/Header/Header";
import Wall from "../components/Home/Wall/Wall";
import LeftCol from "../components/Home/LeftCol/LeftCol";
import RightCol from "../components/Home/RightCol/RightCol";

const Home = () => {
  return (
    <Container>
      <Header />
      <Section>
        <LeftCol />
        <Wall />
        <RightCol />
      </Section>
    </Container>
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
  padding: 12px 0;
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

export default Home;
