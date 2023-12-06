import styled from "styled-components";
import React from "react";
import LatestNews from "../../Widgets/LatestNews";
import PeopleMayYouKnow from "../../Widgets/PeopleMayYouKnow";
import FooterInlineMenu from "../../Footer/FooterInlineMenu";

const RightCol = () => {
  return (
    <Container>
      <LatestNews />
      <PeopleMayYouKnow />
      <FooterInlineMenu extraClass="logo-last" logoVariation="-blue" />
    </Container>
  );
};

const Container = styled.div`
  min-width: 300px;
  width: 20%;
  margin-bottom: 24px;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
  }
`;

export default RightCol;
