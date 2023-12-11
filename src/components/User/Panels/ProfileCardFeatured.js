/**
 *
 * Component: Featured
 * @desc This component uses a parser that parses HTML content to render (without it all HTML element is rendered as simple raw content)
 * @author Robert Koteles
 * @version 1.0.0
 */

import React from "react";
import ProfileCardBox from "./ProfileCardBox";

const ProfileCardFeatured = (props) => {
  const profileUid = props.profileuid;
  const isEditMode = props.iseditmode ? props.iseditmode : false;

  return (
    <ProfileCardBox
      title="Featured"
      content={"TODO: add content information here"}
      panel="featured"
      iseditmode={isEditMode}
    ></ProfileCardBox>
  );
};

export default ProfileCardFeatured;
