import React from "react";
import styled from "styled-components";

const ProfileCardCoverImage = () => {
  return (
    <CoverImage>
      <img src="./upload/usercover.jpg" alt="Cover image" />
    </CoverImage>
  );
};

const CoverImage = styled.div`
  height: 52px;
  margin: -12px -12px 0px;
  background: url("images/card-bg.svg") center no-repeat;
  background-size: cover;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
  }
`;

export default ProfileCardCoverImage;
