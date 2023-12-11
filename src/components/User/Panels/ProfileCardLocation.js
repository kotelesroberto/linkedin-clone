import React from "react";
import styled from "styled-components";
import * as variables from "../../Common/Variables";

const ProfileCardLocation = (props) => {
  return (
    <Container>
      {props.user && props.user.location && props.user.location}
    </Container>
  );
};

const Container = styled.span`
  font-size: 14px;
  display: block;
  color: ${variables.colors.colorFont};
  margin-top: 8px;
`;

export default ProfileCardLocation;
