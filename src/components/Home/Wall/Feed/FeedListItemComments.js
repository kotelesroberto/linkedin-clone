/**
 * Component
 * Feed
 * Comment section under a post
 * 2023, Robert Koteles
 */

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Moment from "react-moment";

import {
  ShareBoxContainer,
  ShareBoxWrapper,
  ShareBoxTop,
} from "../../../Common/ShareBox";
import { UserAvatarPhoto } from "../../../Common/User";
import { ButtonSharePost } from "../../../Common/Buttons";
import FeedListItemComment from "./FeedListItemComment";

const FeedListItemComments = (props) => {
  const [comments, setComments] = useState("");

  useEffect(() => {
    // Start the pooled timer which runs every 60 seconds
    // (60000 milliseconds) by default.
    Moment.startPooledTimer();
  }, []);

  const commentItems = [
    {
      postid: "123",
      uid: "1234242",
      avatar:
        "https://lh3.googleusercontent.com/a/ACg8ocJ2KSQFsnfPBvksN94_5BEWBXwXOeTuX1IcAXp1auhH=s96-c",
      displayName: "Author name 1",
      userlink: "https://www.google.com",
      timestamp: 1701788568696,
      text: "Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!",
      likes: Math.floor(Math.random() * 1000) + 1,
    },
    {
      postid: "123",
      uid: "1234242",
      avatar:
        "https://lh3.googleusercontent.com/a/ACg8ocJ2KSQFsnfPBvksN94_5BEWBXwXOeTuX1IcAXp1auhH=s96-c",
      displayName: "Author name",
      userlink: "https://www.google.com",
      timestamp: Date.now(),
      text: "Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!",
      likes: Math.floor(Math.random() * 1000) + 1,
    },
  ];

  // setComments((prevComments) => commentItems);

  // const data = {
  //   postid: "", // this is the connecting key to the post
  //   uid: props.user.uid,
  //   avatar: props.user.photoURL,
  //   displayName: props.user.displayName,
  //   userlink: props.user.link ? props.user.link : "",
  //   timestamp: Date.now(),
  //   text: comment,
  //   comments: "",
  //   likes: Math.floor(Math.random() * 1000) + 1,
  // };

  return (
    <CommentBoxContainer>
      <CommentBoxWrapper>
        <CommentBoxTop>
          <CommentAuthorPhoto>
            {props.user && props.user.photoURL ? (
              <img src={props.user.photoURL} alt={props.user.displayName} />
            ) : (
              <img src="/images/avatar.svg" alt="User avatar" />
            )}
          </CommentAuthorPhoto>
          <ButtonSharePost>Add a comment...</ButtonSharePost>
        </CommentBoxTop>
        <Comments>
          {!!commentItems.length &&
            commentItems.map((item) => <FeedListItemComment item={item} />)}
        </Comments>
      </CommentBoxWrapper>
    </CommentBoxContainer>
  );
};

const CommentBoxContainer = styled(ShareBoxContainer)`
  box-shadow: none;
  padding-bottom: 0;
  margin-bottom: 0;
`;
const CommentBoxWrapper = styled(ShareBoxWrapper)``;
const CommentBoxTop = styled(ShareBoxTop)``;
const Comments = styled.ul`
  margin: 0;
  margin-top: 12px;
  padding: 0;
  list-style: none;
`;

const CommentAuthorPhoto = styled(UserAvatarPhoto)``;

/*=====  React-redux related functions  ======*/

// any time the store is updated, mapStateToProps will be called. Expected to return an object
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedListItemComments);
