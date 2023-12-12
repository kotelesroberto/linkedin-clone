import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";
import * as variables from "../../../_library/Variables";

import { SocialCountButton } from "../../../_library/Buttons";
import { SocialCounts, SocialCountItem } from "../../../_library/FeedItems";
import { UserAvatarPhoto } from "../../../_library/User";

const FeedListItemComment = (props) => {
  const item = props.item;
  const doLike = props.dolike;

  const [likes, setLikes] = useState([]);
  const [isPostLiked, setIsPostLiked] = useState(false);
  const countLikes = likes.length;

  const navigate = useNavigate();

  useEffect(() => {
    setLikes(item.likes);
    setIsPostLiked(item.likes.indexOf(props.user.uid) !== -1);
  }, []);

  const clickLike = (e) => {
    doLike(
      e,
      {
        collection: "post-comments",
        documentID: item.id,
        user: props.user,
        likes: likes,
      },
      (response) => {
        setLikes((oldLikes) => response.likes);
        setIsPostLiked(response.isPostLiked);
      }
    );
  };

  const clickReply = (e) => {
    e.preventDefault();
    navigate("/demo");
  };

  return (
    <Comment>
      <CommentContainer>
        <CommentAuthorPhoto>
          {item.photoURL ? (
            <img src={item.photoURL} alt={item.displayName} />
          ) : (
            <img src="/images/avatar.svg" alt="User avatar" />
          )}
        </CommentAuthorPhoto>
        <CommentContent>
          <CommentAuthorName>{item.displayName}</CommentAuthorName>
          <CommentContentDate>
            <Moment fromNow ago>
              {new Date(item.timestamp)}
            </Moment>
          </CommentContentDate>
          <p>{item.text}</p>
          <CommentSocialContainer>
            <CommentSocialItem>
              <CommentSocialItemButton
                className={isPostLiked ? "liked" : ""}
                onClick={(e) => clickLike(e)}
              >
                Like
              </CommentSocialItemButton>

              {!!countLikes && (
                <a href="#">
                  <img src="/images/icon-like.svg" alt="" />
                  <span>{countLikes}</span>
                </a>
              )}
            </CommentSocialItem>
            <CommentSocialItem>
              <CommentSocialItemButton onClick={(e) => clickReply(e)}>
                Reply
              </CommentSocialItemButton>
            </CommentSocialItem>
          </CommentSocialContainer>
        </CommentContent>
      </CommentContainer>
    </Comment>
  );
};

const Comment = styled.li``;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CommentContent = styled.div`
  width: 100%;
  background-color: ${variables.colors.commentBoxBackground};
  padding: 12px;
  font-size: 14px;
  color: ${variables.colors.colorFont};
  margin-bottom: 40px;
  position: relative;

  p {
    margin-top: 4px;
    margin-bottom: 4px;
  }
`;

const CommentAuthorPhoto = styled(UserAvatarPhoto)``;

const CommentAuthorName = styled.h4``;

const CommentContentDate = styled.span`
  font-size: 12px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 12px;
`;

const CommentSocialContainer = styled(SocialCounts)`
  position: absolute;
  bottom: -40px;
  justify-content: flex-start;
`;
const CommentSocialItem = styled(SocialCountItem)`
  position: relative;

  &:before {
    content: "";
    height: 60%;
    display: block;
    border-left: 1px solid grey;
    margin-left: 12px;
    margin-right: 12px;
  }

  &:first-child {
    &:before {
      display: none;
    }
  }
`;
const CommentSocialItemButton = styled(SocialCountButton)`
  &.liked {
    font-weight: 700;
    color: ${variables.colors.link};
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
)(FeedListItemComment);
