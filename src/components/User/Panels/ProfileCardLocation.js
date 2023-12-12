import React from "react";
import styled from "styled-components";
import * as variables from "../../_library/Variables";

const ProfileCardLocation = (props) => {
  const user = props.user;

  return <Container>{user && user && user.location}</Container>;
};

const Container = styled.span`
  font-size: 14px;
  display: block;
  color: ${variables.colors.colorFont};
  margin-top: 8px;
`;

export default ProfileCardLocation;
