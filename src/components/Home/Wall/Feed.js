import React, { useEffect, useRef, useState, useMemo } from "react";
import styled from "styled-components";
import { ButtonNewPost } from "../../Common/Buttons";
import FeedListItem from "./FeedListItem";

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
import { db, auth, storage } from "../../../firebase/firebase";

const Feed = () => {
  const [feedItems, setFeedItems] = useState([]);

  useEffect(() => {
    const unsubscribe = getPosts();

    return () => {
      // cleanup
      unsubscribe(); // this function is given back by onSnapshot
    };
  }, []);

  /* get posts */
  const getPosts = () => {
    const q = query(
      collection(db, "posts"),
      where("uid", "in", ["ooKsVd0qRLhlyrQz30ADAd8OQ7Z2"]),
      orderBy("timestamp", "asc")
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      // console.log(querySnapshot.size);

      querySnapshot.forEach((doc) => {
        // get this post item
        const docData = doc.data();
        let newFeedItem = {};
        let imgArray = [];

        // only add the snapshotted data if it's not in the state yet

        const existingItem = feedItems.filter(
          (arrItem) => arrItem.id === doc.id
        );

        console.log(doc.id);
        console.log({ existingItem });

        // if it's exist, jsut check images (as image upload is asyncrnous and after create a POST it takes time to got results)
        if (existingItem.length) {
          console.log("ITEM IS EXIST");

          console.log(JSON.stringify(docData.images));
          console.log(JSON.stringify(existingItem.images));
        }

        // if (!feedItems.some((arrItem) => arrItem.id === doc.id)) {
        if (!existingItem.length) {
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

          console.log("called: getRelatedImages");
          getRelatedImages(doc.id).then((images) => {
            console.log("called: getRelatedImages INSIDE");
            images.map((item) => {
              imgArray.push({
                url: item,
                title: "",
              });
            });

            // get the images belong to this post item
            newFeedItem.images = imgArray;

            // add the new content to the component's state
            const newState = feedItems;
            newState.unshift(newFeedItem); // add element as first
            setFeedItems((previousState) => [...newState]);
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
            key={"feed-list-item-" + item.id}
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
