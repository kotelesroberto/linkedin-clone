import React from "react";
import { UserPhoto } from "../Common/User";
import { connect } from "react-redux";

const ProfileCardUserPhoto = (props) => {
  return (
    <UserPhoto status="opentowork">
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
  console.log(state);
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(ProfileCardUserPhoto);
