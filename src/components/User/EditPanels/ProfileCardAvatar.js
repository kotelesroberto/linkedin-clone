import React, { useRef, useState } from "react";
import styled from "styled-components";

import { handleImageUpload } from "../../../utils/filename";
import * as variables from "../../Common/Variables";

const ProfileCardAvatar = (props) => {
  const user = props.user;
  const [newImage, setNewImage] = useState(false);

  // referencing to image DOM element and to thumbnail
  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);

  let imageToShow = {
    url: "/images/avatar.svg",
    alt: "Gneral avatar",
  };
  if (user && user && user.photoURL) {
    imageToShow.url = user.photoURL;
    imageToShow.alt = `Photo of ${user.displayName}`;
  }

  return (
    <CoverImage htmlFor="newImageFile">
      <img
        src={imageToShow.url}
        alt={imageToShow.alt}
        //   className={newImage ? "old" : ""}
        ref={uploadedImage}
      />

      <div className="replace-icon">
        <img
          src="/images/replace-icon.svg"
          alt="Replace"
          className="replace-icon"
        />
      </div>

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
    </CoverImage>
  );
};

const CoverImage = styled.label`
  cursor: pointer;
  position: relative;
  text-align: center !important;
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
    max-height: 40vh;
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

export default ProfileCardAvatar;
