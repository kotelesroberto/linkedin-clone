import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ButtonNewPost } from "../../Common/Buttons";
import FeedListItem from "./FeedListItem";

// firebase related
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db, auth, storage } from "../../../firebase/firebase";

const Feed = () => {

  const [feedItems, setFeedItems] = useState([]);

  console.log('COMPONENT: FEED');


  useEffect(() => {
    const unsubscribe = getPosts();

    console.log('Feed useEffect');

    return () => {
      console.log('unsubscribe');
      // cleanup
      unsubscribe(); // this function is given back by onSnapshot
    };
  }, []);

  /* get posts */
  const getPosts = () => {
    const q = query(collection(db, "posts"), where("uid", "!=", ""));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      // console.log(querySnapshot.size);

      console.log("feedItems", feedItems);

      querySnapshot.forEach((doc) => {
        // get this post item
        const docData = doc.data();
        let newFeedItem = {};
        let imgArray = [];

        // only add the snapshotted data if it's not in the state yet
        if (!feedItems.some((arrItem) => arrItem.id === doc.id)) {
          console.log("doc.id", doc.id);
          getRelatedImages(doc.id);

          newFeedItem = {
            id: doc.id,
            user: {
              avatar: docData.avatar,
              name: docData.displayName,
              description: "",
              url: "",
            },
            timestamp: docData.timestamp,
            content: docData.text,
            url: "http://www.google.co.uk",
            images: [],
            interactions: {
              likes: docData.likes,
              numComments: docData.numComments,
              reposts: docData.reposts,
            },
          };

          getRelatedImages(doc.id).then((images) => {
            images.map((item) => {
              imgArray.push({
                url: item,
                title: "",
              });
            });

            // get the images belong to this post item
            newFeedItem.images = imgArray;

            setFeedItems((feedItems) => [...feedItems, newFeedItem]);
          });
        }
      });
    });

    return unsubscribe;
  };

  /* get images */
  const getRelatedImages = async (postID) => {
    let images = [];

    const q = query(
      collection(db, "post-images"),
      where("postRef", "==", postID)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.id
      images.push(doc.data().imgUrl);
    });

    return images;
  };

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

      <ButtonNewPost id="button-new-post" aria-label="New posts">
        New posts
      </ButtonNewPost>

      <FeedList>
        {feedItems.map((item, index) => (
          <FeedListItem
            key={"feed-list-item-" + index}
            parentkey={"feed-list-item-" + index}
            content={item}
          />
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
