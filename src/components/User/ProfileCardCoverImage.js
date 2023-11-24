import React from "react";
import styled from "styled-components";

const ProfileCardCoverImage = () => {
  return <CoverImage></CoverImage>;
};

const CoverImage = styled.div`
  height: 52px;
  margin: -12px -12px 0px;
  /* background: url("images/card-bg.svg") center no-repeat; */
  background: url("./upload/usercover.jpg") center no-repeat;
  background-size: cover;
`;

export default ProfileCardCoverImage;
