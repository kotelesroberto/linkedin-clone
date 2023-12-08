/**
 *
 * Component: Interests
 * @desc This component is for showing the user's interests
 * @author Robert Koteles
 * @version 1.0.0
 */

import React from "react";
import ProfileCardBox from "./ProfileCardBox";

const ProfileCardInterests = (props) => {
  const isEditMode = props.iseditmode ? props.iseditmode : false;
  const profileUid = props.profileuid;

  const onClickEdit = (e) => {
    e.preventDefault();
    console.log("onClickEdit");
  };

  return (
    <ProfileCardBox
      title="Interests"
      content={"TODO: add content information here"}
      onclickedit={onClickEdit}
      iseditmode={isEditMode}
    ></ProfileCardBox>
  );
};

export default ProfileCardInterests;
