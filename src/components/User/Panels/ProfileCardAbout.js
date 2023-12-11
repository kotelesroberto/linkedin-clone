/**
 *
 * Component: About
 * @desc This component uses a parser that parses HTML content to render (without it all HTML element is rendered as simple raw content)
 * @author Robert Koteles
 * @version 1.0.0
 */

import React from "react";
import ProfileCardBox from "./ProfileCardBox";

const ProfileCardAbout = (props) => {
  const user = props.user;
  const isEditMode = props.iseditmode ? props.iseditmode : false;

  return (
    <ProfileCardBox
      title="About"
      panel="about"
      content={ user.extra && user.extra.about}
      iseditmode={isEditMode}
    ></ProfileCardBox>
  );
};

export default ProfileCardAbout;
