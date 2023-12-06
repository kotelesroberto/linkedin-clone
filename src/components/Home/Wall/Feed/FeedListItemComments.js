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
import * as variables from "../../../Common/Variables";

import {
  ShareBoxContainer,
  ShareBoxWrapper,
  ShareBoxTop,
} from "../../../Common/ShareBox";
import { UserAvatarPhoto } from "../../../Common/User";
import { ButtonSharePost, ButtonSecondary } from "../../../Common/Buttons";
import FeedListItemComment from "./FeedListItemComment";
import { SaveContentIntoFirebase } from "../../../../utils/uploadFile";

// firebase related
import {
  collection,
  query,
  where,
  orderBy,
  getDocs,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db, auth, storage } from "../../../../firebase/firebase";

const FeedListItemComments = (props) => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [countcomments, setCountcomments] = useState(0);
  const originalPostID = props.postid;
  const textareaID = `add-comment-${originalPostID}`;

  useEffect(() => {
    // Start the pooled timer which runs every 60 seconds
    // (60000 milliseconds) by default.
    Moment.startPooledTimer();
  }, []);

  useEffect(() => {
    const unsubscribe = getComments();

    return () => {
      // cleanup
      unsubscribe(); // this function is given back by onSnapshot
    };
  }, []);

  const __commentItems = [
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
      postid: "1234",
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

  // Updates the height of a <textarea> when the value changes.
  const useAutosizeTextArea = () => {
    useEffect(() => {
      const textAreaRef = document.getElementById(textareaID);
      // We need to reset the height momentarily to get the correct scrollHeight for the textarea
      textAreaRef.style.height = "0px";
      let scrollHeight = textAreaRef.scrollHeight;

      scrollHeight = scrollHeight > 150 ? 150 : scrollHeight;

      // We then set the height directly, outside of the render loop
      // Trying to set this with state or a ref will product an incorrect value.
      textAreaRef.style.height = scrollHeight + "px";
    }, [commentText]);
  };
  // set textarea growing by its content
  useAutosizeTextArea();

  const clickAddComment = (e) => {
    e.preventDefault();

    let commentRef = "";

    const data = {
      postid: originalPostID, // this is the connecting key to the post
      uid: props.user.uid,
      avatar: props.user.photoURL,
      displayName: props.user.displayName,
      userlink: props.user.link ? props.user.link : "",
      timestamp: Date.now(),
      text: commentText,
      comments: "",
      likes: Math.floor(Math.random() * 1000) + 1,
    };

    // save post content into Firestore
    SaveContentIntoFirebase("post-comments", data, (response) => {
      commentRef = response.id;
    });

    setCommentText("");
  };

  /* get comments */
  const getComments = () => {
    const q = query(
      collection(db, "post-comments"),
      where("postid", "in", [originalPostID]),
      orderBy("timestamp", "asc")
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setCountcomments(querySnapshot.size);

      querySnapshot.forEach((doc) => {
        // get this post item
        const docData = doc.data();
        let newFeedItem = {};
        let imgArray = [];

        // only add the snapshotted data if it's not in the state yet
        if (!comments.some((arrItem) => arrItem.id === doc.id)) {
          newFeedItem = {
            id: doc.id,
            postid: docData.postid, // this is the connecting key to the post
            uid: docData.uid,
            avatar: docData.photoURL,
            displayName: docData.displayName,
            userlink: docData.userlink,
            timestamp: docData.timestamp,
            text: docData.text,
            comments: docData.comments,
            likes: docData.likes,
          };

          // add the new content to the component's state
          const newState = comments;
          newState.unshift(newFeedItem); // add element as first

          setComments((previousState) => [...newState]);
          // setComments((previousState) => [newFeedItem, ...previousState]);
        }
      });
    });

    return unsubscribe;
  };

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
          <CommentInput
            id={textareaID}
            rows="1"
            value={commentText}
            placeholder="Add a comment..."
            onChange={(e) => setCommentText(e.target.value)}
          />
          {!!commentText.length && (
            <ButtonSecondary onClick={(e) => clickAddComment(e)}>
              Post
            </ButtonSecondary>
          )}
        </CommentBoxTop>
        <Comments>
          {!!comments.length &&
            comments.map((item, index) => (
              <FeedListItemComment
                item={item}
                key={`comment-${originalPostID}-${index}`}
              />
            ))}
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
const CommentBoxTop = styled(ShareBoxTop)`
  ${ButtonSecondary} {
    width: auto;
    min-height: 12px;
    padding: 10px 14px;
    font-size: 12px;
    margin-left: 4px;
  }
`;
const Comments = styled.ul`
  margin: 0;
  margin-top: 12px;
  padding: 0;
  list-style: none;
`;

const CommentAuthorPhoto = styled(UserAvatarPhoto)``;
const CommentInput = styled.textarea`
  min-height: 44px;
  width: 100%;
  height: min-content;
  position: relative;
  border-radius: 22px;
  padding: 10px 14px;
  font-size: 14px;
  line-height: 1em;
  font-weight: 700;
  vertical-align: middle;
  background-color: ${variables.colors.white};
  color: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s;
  cursor: pointer;
  resize: none;
  height: auto;
  overflow: auto;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.75) 0px 0px 0px 1px inset;
    outline: none;
    background-color: rgba(0, 0, 0, 0.04);
  }
`;
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
