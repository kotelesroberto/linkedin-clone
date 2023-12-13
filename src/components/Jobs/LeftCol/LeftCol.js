/**
 *
 * Component: Job page's left column
 * 2023, Robert Koteles
 */

import styled from "styled-components";
import React from "react";
import WidgetJobMenu from "./WidgetJobMenu";

const LeftCol = (props) => {
  return (
    <Container>
      <WidgetJobMenu />
    </Container>
  );
};

const Container = styled.div`
  min-width: 255px;
  width: 27%;
  margin-bottom: 24px;

  @media (max-width: 1024px) {
    min-width: 225px;
    width: 225px;
  }

  @media (max-width: 768px) {
    min-width: initial;
    width: 100%;
  }
`;

export default LeftCol;
