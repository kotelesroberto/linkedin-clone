import React from "react";
import styled from "styled-components";
import * as variables from "../Common/Variables";

const ProfileCardLocation = () => {
  const location = "London, England, United Kingdom";

  return <Container>{location}</Container>;
};

const Container = styled.span`
  font-size: 14px;
  display: block;
  color: ${variables.colors.colorFont};
  margin-top: 8px;
`;

export default ProfileCardLocation;
