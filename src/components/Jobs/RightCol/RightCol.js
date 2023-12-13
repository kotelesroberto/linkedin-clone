/**
 *
 * Component: Job page's right column
 * 2023, Robert Koteles
 */

import React from "react";
import styled from "styled-components";
import LatestNews from "../../Widgets/LatestNews";
import FooterInlineMenu from "../../Footer/FooterInlineMenu";

const RightCol = () => {
  return (
    <Container>
      <LatestNews />
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
