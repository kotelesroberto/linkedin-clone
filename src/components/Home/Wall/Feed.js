import React from "react";
import styled from "styled-components";
import { ButtonNewPost } from "../../Common/Buttons";
import FeedListItem from "./FeedListItem";

const Feed = () => {
  const feedItems = [
    {
      user: {
        avatar: "./images/avatar.svg",
        name: "B.B. King",
        description: "King of the blues, legendary musician",
        url: "/in/demo",
      },
      timestamp: "2d",
      content:
        "B.B. King is a legendary blues and guitar icon who has left an indelible mark on the music industry. To honor his legacy, the B.B. King Life Legacy Initiative has launched several new partnerships, retail products, and brand concepts. This is a big deal, and even Billboard.com has picked up the article and written their own version.",
      url: "http://www.google.co.uk",
      image: {
        url: "/upload/bbking.jpg",
        title: "This is the King",
      },
    },
    {
      user: {
        avatar: "./images/avatar.svg",
        name: "Jimi Hendrix",
        description: "The man who established modern music",
        url: "/in/demo",
      },
      timestamp: "4d",
      content:
        "Widely recognized as one of the most creative and influential musicians of the 20th century, Jimi Hendrix pioneered the explosive possibilities of the electric guitar. Hendrix’s innovative style of combining fuzz, feedback and controlled distortion created a new musical form. Because he was unable to read or write music, it is nothing short of remarkable that Jimi Hendrix’s meteoric rise in the music took place in just four short years. His musical language continues to influence a host of modern musicians, from George Clinton to Miles Davis, and Steve Vai to Jonny Lang.",
      url: "http://www.google.co.uk",
      image: {
        url: "/upload/hendrix.jpg",
        title: "This is also the King",
      },
    },
  ];

  return (
    <>
      <FeedSortBy>
        <hr />
        <span>Sort by:</span>
        <span>Recent</span>
        <img
          src="/images/arrow-down-small.svg"
          alt="Open dropdown"
          className="icon-arrow"
        />
      </FeedSortBy>

      <ButtonNewPost id="button-new-post">New posts</ButtonNewPost>

      <FeedList>
        {feedItems.map((item, index) => (
          <FeedListItem key={"feed-list-item-" + index} content={item} />
        ))}
      </FeedList>
    </>
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

const FeedList = styled.div``;

export default Feed;
