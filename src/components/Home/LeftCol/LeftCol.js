/**
 *
 * Component: Home page's left column
 * 2023, Robert Koteles
 */

import styled from "styled-components";
import React from "react";
import ProfileCardMini from "../../User/ProfileCardMini";
import WidgetRecent from "./WidgetRecent";

const LeftCol = (props) => {
  return (
    <Container>
      <ProfileCardMini iseditmode={false} isprofilepage={false} />
      <WidgetRecent />
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
