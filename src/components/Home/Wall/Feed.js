import React, { useEffect, useRef, useState, useMemo } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { ButtonNewPost } from "../../Common/Buttons";
import FeedListItem from "./FeedListItem";

import { isImagesUploadDone } from "../../../redux/actions/actions";

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

const Feed = (props) => {
  const [feedItems, setFeedItems] = useState([]);

  useEffect(() => {
    const unsubscribe = getPosts();

    return () => {
      // cleanup
      unsubscribe(); // this function is given back by onSnapshot
    };
  }, []);

  useEffect(() => {
    getNewPostData();
  }, [props.isNewPostImageUploadDone]);

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

        if (!feedItems.some((arrItem) => arrItem.id === doc.id)) {
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

  /* get newly added post data */
  const getNewPostData = () => {
    // in case of having a new post from the <ShareBox> component, upliading image is async process -> after getting the Redux notification we need to get the new post item with the belonging images
    if (props.isNewPostImageUploadDone) {
      // add image infomration to the new post that is already in the component state, thanks to the onSnapshot API

      if (
        feedItems.some(
          (arrItem) => arrItem.id === props.isNewPostImageUploadDone
        )
      ) {
        let imgArray = [];

        getRelatedImages(props.isNewPostImageUploadDone).then((images) => {
          images.map((item) => {
            imgArray.push({
              url: item,
              title: "",
            });
          });

          // add the new image information to the belonging post item in the component's state
          const newState = feedItems;
          newState.map((item) => {
            // newFeedItem.images = imgArray;
            if (item.id === props.isNewPostImageUploadDone) {
              item.images = imgArray;
            }
          });

          setFeedItems((previousState) => [...newState]);

          // erase reference to the new post from Redux store
          props.setImagesUploadDone("");
        });
      }
    }
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

      {props.isNewPostImageUploadDone && (
        <p>{props.isNewPostImageUploadDone}</p>
      )}

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

/*=====  React-redux related functions  ======*/

// any time the store is updated, mapStateToProps will be called. Expected to return an object
const mapStateToProps = (state) => {
  return {
    isNewPostImageUploadDone: state.postSettingState.isNewPostImageUploadDone,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setImagesUploadDone: (postRef) => {
      dispatch(isImagesUploadDone(postRef));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
