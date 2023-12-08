import React from "react";
import styled from "styled-components";
import { EditButton } from "../Common/Buttons";

const ProfileCardCoverImage = (props) => {
  const isEditMode = props.iseditmode ? props.iseditmode : false;
  const isProfilePage = props.isprofilepage ? props.isprofilepage : false;

  const onClickEdit = (e) => {
    e.preventDefault();
    console.log("onClickEdit");
  };

  return (
    <CoverImage className={isProfilePage ? "big" : ""}>
      <img src="./upload/usercover.jpg" alt="Cover image" />
      {isEditMode && <LocalEditButton onClick={(e) => onClickEdit(e)} />}
    </CoverImage>
  );
};

const CoverImage = styled.div`
  height: 52px;
  margin: -12px -12px 0px;
  background: url("images/card-bg.svg") center no-repeat;
  background-size: cover;
  overflow: hidden;
  cursor: pointer;

  &.big {
    height: 200px;
    margin: -12px 0 0;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const LocalEditButton = styled(EditButton)`
  z-index: 10;
  position: absolute;
  top: 12px;
  right: 12px;
  border: none;
`;

export default ProfileCardCoverImage;
