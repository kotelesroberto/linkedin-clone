/**
 *
 * Component: User profile page's left column
 * 2023, Robert Koteles
 */

import React from "react";
import styled from "styled-components";
import ProfileCard from "../../User/ProfileCard";

const LeftCol = (props) => {
  return (
    <Container>
      <ProfileCard />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-bottom: 24px;
  margin-right: 12px;
`;

export default LeftCol;
