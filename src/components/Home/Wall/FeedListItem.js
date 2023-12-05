import React from "react";
import Moment from "react-moment";
import styled from "styled-components";
import { Card, CardContainer } from "../../Common/Cards";
import { UserAvatarPhoto } from "../../Common/User";
import {
  IconButtonRow,
  IconPeople,
  ButtonActionContainer,
  ButtonAction,
} from "../../Common/Icons";
import FeedListItemImage from "./FeedListItemImage";

const FeedListItem = (props) => {
  
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
            <FeedListItemName>{props.content.user.name}</FeedListItemName>
            <FeedListItemSublabel aria-hidden="true">
              {props.content.user.description}
            </FeedListItemSublabel>
            <FeedListItemDate>
              <Moment fromNow>{new Date(props.content.timestamp)}</Moment> •{" "}
              <IconPeople />
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

          {!!props.content.images.length && (
            <FeedListItemImages>
              {props.content.images.map((item, index) => (
                <FeedListItemImage
                  image={item}
                  key={`post-${props.parentkey}-image-${index}`}
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
              <span>{props.content.interactions.likes}</span>
            </a>
          </SocialCountItem>
          <SocialCountItem>
            <span>
              <a href="#">{props.content.interactions.numComments} comments</a>•
              <a href="#">{props.content.interactions.reposts} reposts</a>
            </span>
          </SocialCountItem>
        </SocialCounts>

        <FeedListItemButtons>
          <button>
            <img src="/images/icon-thumbs-up.svg" alt="" />
            <span>Like</span>
          </button>
          <button>
            <img src="/images/icon-comment.svg" alt="" />
            <span>Comment</span>
          </button>
          <button>
            <img src="/images/icon-repost.svg" alt="" />
            <span>Repost</span>
          </button>
          <button>
            <img src="/images/icon-send.svg" alt="" />
            <span>Send</span>
          </button>
        </FeedListItemButtons>
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
    color: rgba(0, 0, 0, 0.6);
    margin-right: 4px;
    &:nth-child(3) {
      color: rgba(0, 0, 0, 0.9);
      font-weight: 700;
    }
  }
`;

const FeedListItemCard = styled(Card)`
  display: flex;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.6);
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
  color: rgba(0, 0, 0, 0.9);
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

const FeedListItemName = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 700;
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

const SocialCounts = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 8px 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
  line-height: 1em;
`;

const SocialCountItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    margin: 0 4px;
  }

  span {
    margin-left: 4px;
  }
`;

export default FeedListItem;
