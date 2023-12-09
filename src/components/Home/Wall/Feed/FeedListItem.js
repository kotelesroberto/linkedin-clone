/**
 * Component
 * Feed
 * CFeed list item
 * 2023, Robert Koteles
 */

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Card, CardContainer } from "../../../Common/Cards";
import { UserAvatarPhoto } from "../../../Common/User";
import { SocialCounts, SocialCountItem } from "../../../Common/FeedItems";
import {
  IconButtonRow,
  IconGlobe,
  ButtonActionContainer,
  ButtonAction,
} from "../../../Common/Icons";

import FeedListItemImage from "./FeedListItemImage";
import FeedListItemVideo from "./FeedListItemVideo";
import FeedListItemComments from "./FeedListItemComments";
import { doLike } from "../../../../utils/manageLikes";
import * as variables from "../../../Common/Variables";

const FeedListItem = (props) => {
  const parentKey = props.parentkey;

  useEffect(() => {
    // Start the pooled timer which runs every 60 seconds
    // (60000 milliseconds) by default.
    Moment.startPooledTimer();
    setLikes(props.content.interactions.likes);
    setIsPostLiked(
      props.content.interactions.likes.indexOf(props.user.uid) !== -1
    );
    setCountComments(props.content.interactions.numComments);
  }, []);

  const [isPostLiked, setIsPostLiked] = useState(false);
  const [likes, setLikes] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [countComments, setCountComments] = useState(0);

  const countLikes = likes.length;

  const navigate = useNavigate();

  const showCommentsPanel = (e) => {
    e.preventDefault();
    setShowComments(!showComments);
  };

  const clickReshare = (e) => {
    e.preventDefault();
    navigate("/demo");
  };
  const clickSend = (e) => {
    clickReshare(e);
  };

  const clickLike = (e) => {
    doLike(
      e,
      {
        collection: "posts",
        documentID: props.content.id,
        user: props.user,
        likes: likes,
      },
      (response) => {
        setLikes((oldLikes) => response.likes);
        setIsPostLiked(response.isPostLiked);
      }
    );
  };

  return (
    <FeedListItemCard>
      <FeedListItemContainer>
        <FeedListItemTop>
          <FeedListItemPhoto>
            <img
              src={props.content.user.avatar}
              alt={props.content.user.name}
            />
          </FeedListItemPhoto>
          <FeedListItemInfo>
            <FeedListItemName href={`./in/${props.content.user.uid}`}>
              {props.content.user.name}
            </FeedListItemName>
            <FeedListItemSublabel aria-hidden="true">
              {props.content.user.description}
            </FeedListItemSublabel>
            <FeedListItemDate>
              <Moment fromNow>{new Date(props.content.timestamp)}</Moment> •{" "}
              <IconGlobe />
            </FeedListItemDate>
          </FeedListItemInfo>

          <FeedItemActions>
            <FeedItemAction>
              <img
                src="/images/ellipsis.svg"
                alt="Open dropdown"
                className="icon-arrow"
              />
            </FeedItemAction>
            <FeedItemAction>
              <img
                src="/images/icon-close.svg"
                alt="Hide post"
                className="close-icon"
              />
            </FeedItemAction>
          </FeedItemActions>
        </FeedListItemTop>
        <FeedListItemContent>
          <span>{props.content.content}</span>
          <FeedListItemVideo content={props.content.content} />
          {!!props.content.images.length && (
            <FeedListItemImages
              key={`feed-list-item-${props.content.parentKey}-images`}
            >
              {props.content.images.map((item, index) => (
                <FeedListItemImage
                  image={item}
                  key={`feed-list-item-${props.content.parentKey}-image-${index}`}
                />
              ))}
            </FeedListItemImages>
          )}
        </FeedListItemContent>

        <SocialCounts>
          <SocialCountItem>
            <a href="#">
              <img src="/images/icon-like.svg" alt="" />
              <img src="/images/icon-clap.svg" alt="" />
              <span>{countLikes}</span>
            </a>
          </SocialCountItem>
          <SocialCountItem>
            <span>
              <a href="#" onClick={(e) => showCommentsPanel(e)}>
                {countComments} comments
              </a>
              •
              <a href="#" onClick={(e) => clickReshare(e)}>
                {props.content.interactions.reposts} reposts
              </a>
            </span>
          </SocialCountItem>
        </SocialCounts>

        <FeedListItemButtons>
          <button onClick={(e) => clickLike(e)}>
            {isPostLiked ? (
              <img src="/images/icon-thumbs-up-fill.svg" alt="" />
            ) : (
              <img src="/images/icon-thumbs-up.svg" alt="" />
            )}
            <span>Like</span>
          </button>
          <button onClick={(e) => showCommentsPanel(e)}>
            <img src="/images/icon-comment.svg" alt="" />
            <span>Comment</span>
          </button>
          <button onClick={(e) => clickReshare(e)}>
            <img src="/images/icon-repost.svg" alt="" />
            <span>Repost</span>
          </button>
          <button onClick={(e) => clickSend(e)}>
            <img src="/images/icon-send.svg" alt="" />
            <span>Send</span>
          </button>
        </FeedListItemButtons>

        {showComments && (
          <FeedListItemComments
            postid={props.content.id}
            numcomments={countComments}
            setcountcomments={setCountComments}
          />
        )}
      </FeedListItemContainer>
    </FeedListItemCard>
  );
};

const FeedSortBy = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin: 12px 0;
  font-size: 12px;
  line-height: 1em;

  hr {
    flex-grow: 1;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    margin-right: 8px;
  }

  span {
    color: ${variables.colors.greyBold};
    margin-right: 4px;
    &:nth-child(3) {
      color: ${variables.colors.greyBolder};
      font-weight: 700;
    }
  }
`;

const FeedListItemCard = styled(Card)`
  display: flex;
  flex-direction: column;
  color: ${variables.colors.greyBold};
  padding: 12px;
`;

const FeedListItemContainer = styled(CardContainer)``;

const FeedListItemTop = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  margin-bottom: 8px;
`;

const FeedListItemContent = styled.div`
  color: ${variables.colors.greyBolder};
  font-size: 14px;

  span {
    display: block;
    margin-bottom: 4px;
  }
`;

const FeedListItemImages = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: stretch;

  a {
    margin-left: 5px;

    &:first-child {
      margin-left: 0;
    }
  }

  img {
    display: block;
    object-fit: fill;
    width: auto;
    max-width: 100%;
    height: 100%;
  }
`;

const FeedListItemButtons = styled(IconButtonRow)`
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  margin-top: 12px;
  padding-top: 8px;

  button {
    img {
      @media (max-width: 480px) {
        margin-right: 0;
      }
    }
  }

  span {
    @media (max-width: 480px) {
      display: none;
    }
  }
`;

const FeedListItemPhoto = styled(UserAvatarPhoto)``;

const FeedListItemInfo = styled.div``;

const FeedListItemName = styled.a`
  display: block;
  font-size: 14px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  color: ${variables.colors.greyBolder};
`;

const FeedListItemSublabel = styled.span`
  font-size: 12px;
  display: block;
`;

const FeedListItemDate = styled.span`
  font-size: 12px;
`;

const FeedItemActions = styled(ButtonActionContainer)``;

const FeedItemAction = styled(ButtonAction)``;

/*=====  React-redux related functions  ======*/

// any time the store is updated, mapStateToProps will be called. Expected to return an object
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(FeedListItem);
