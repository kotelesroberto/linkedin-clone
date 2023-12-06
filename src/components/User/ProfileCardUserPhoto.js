import React from "react";
import { UserPhoto } from "../Common/User";
import { connect } from "react-redux";

const ProfileCardUserPhoto = (props) => {
  const isEditMode = props.iseditmode ? props.iseditmode : false;
  const isProfilePage = props.isprofilepage ? props.isprofilepage : false;

  const onClickEdit = (e) => {
    e.preventDefault();
    console.log('onClickEdit');

    if (isEditMode) {
    }
  };

  return (
    <UserPhoto
      status="opentowork"
      className={isProfilePage ? "big" : ""}
      onClick={onClickEdit}
    >
      {props.user && props.user.photoURL ? (
        <img src={props.user.photoURL} alt={props.user.displayName} />
      ) : (
        <img src="/images/avatar.svg" alt="User avatar" />
      )}
    </UserPhoto>
  );
};

/*=====  React-redux related functions  ======*/

// any time the store is updated, mapStateToProps will be called. Expected to return an object
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(ProfileCardUserPhoto);
