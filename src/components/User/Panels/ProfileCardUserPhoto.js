import React from "react";
import { UserPhoto } from "../../Common/User";

const ProfileCardUserPhoto = (props) => {
  const user = props.user;
  const isEditMode = props.iseditmode ? props.iseditmode : false;
  const isProfilePage = props.isprofilepage ? props.isprofilepage : false;

  const onClickEdit = (e) => {
    e.preventDefault();
    console.log("onClickEdit");

    if (isEditMode) {
    }
  };

  return (
    <UserPhoto
      status="opentowork"
      className={isProfilePage ? "big" : ""}
      onClick={onClickEdit}
    >
      {user && user.photoURL ? (
        <img src={user.photoURL} alt={user.displayName} />
      ) : (
        <img src="/images/avatar.svg" alt="User avatar" />
      )}
    </UserPhoto>
  );
};

export default ProfileCardUserPhoto;
