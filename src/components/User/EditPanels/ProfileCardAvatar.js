import React from "react";
import styled from "styled-components";

const ProfileCardAvatar = (props) => {
  const user = props.user;

  let imageToShow = {
    url: "/images/avatar.svg",
    alt: "Gneral avatar",
  };
  if (user && user && user.photoURL) {
    imageToShow.url = user.photoURL;
    imageToShow.alt = `Photo of ${user.displayName}`;
  }

  return (
    <CoverImage>
      <img src={imageToShow.url} alt={imageToShow.alt} />
    </CoverImage>
  );
};

const CoverImage = styled.div`
  cursor: pointer;
  position: relative;

  &.big {
    height: 200px;
    margin: -12px 0 0;
  }

  img {
    max-width: 100% !important;
    height: auto;
    max-height: 40vh;
  }
`;

export default ProfileCardAvatar;
