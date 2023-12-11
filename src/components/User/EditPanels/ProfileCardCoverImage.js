import React from "react";
import styled from "styled-components";

const ProfileCardCoverImage = (props) => {
  const user = props.user;

  let imageToShow = {
    url: "/images/card-bg.svg",
    alt: "Gneral cover image",
  };
  if (user && user && user.teaserImage) {
    imageToShow.url = user.teaserImage;
    imageToShow.alt = `Cover image of ${user.displayName}`;
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
  }
`;

export default ProfileCardCoverImage;
