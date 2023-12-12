import React, { useRef, useState } from "react";
import styled from "styled-components";

import { handleImageUpload } from "../../../utils/filename";
import * as variables from "../../Common/Variables";

const ProfileCardCoverImage = (props) => {
  const user = props.user;
  const [newImage, setNewImage] = useState("");

  // referencing to image DOM element and to thumbnail
  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);

  let imageToShow = {
    url: "/images/card-bg.svg",
    alt: "Gneral cover image",
  };
  if (user && user && user.teaserImage) {
    imageToShow.url = user.teaserImage;
    imageToShow.alt = `Cover image of ${user.displayName}`;
  }

  return (
    <CoverImage htmlFor="newImageFile">
      <img src={imageToShow.url} alt={imageToShow.alt} ref={uploadedImage} />

      <input
        type="file"
        id="newImageFile"
        onChange={(e) =>
          handleImageUpload(e, uploadedImage, (resp) => setNewImage(resp))
        }
        accept="image/*"
        multiple={false}
        ref={imageUploader}
      />
      <div className="replace-icon">
        <img
          src="/images/replace-icon.svg"
          alt="Replace"
          className="replace-icon"
        />
      </div>
    </CoverImage>
  );
};

const CoverImage = styled.label`
  cursor: pointer;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 70vh;

  &.big {
    height: 200px;
    margin: -12px 0 0;
  }

  img {
    max-width: 100% !important;
    height: auto;
  }

  .replace-icon {
    width: 52px;
    height: 52px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 12px;
    border: 1px solid ${variables.colors.white};
  }

  input {
    opacity: 0;
    position: absolute;
  }
`;

export default ProfileCardCoverImage;
