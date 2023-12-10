/**
 * Component
 * Feed
 * Feed container
 * 2023, Robert Koteles
 */

import React, { useEffect, useRef, useState, useMemo } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { ButtonNewPost } from "../../../Common/Buttons";
import FeedListItem from "./FeedListItem";

import { actionIsImagesUploadDone } from "../../../../redux/actions/actions";
import * as variables from "../../../Common/Variables";

// firebase related
import {
  collection,
  query,
  where,
  orderBy,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../../../firebase/firebase";

const Feed = (props) => {
  // all posts
  const [feedItems, setFeedItems] = useState([]);
  // TODO: future development, flag if new post is awaiting in the queue to show (in this DEMO it's immediate effect)
  const [hasNewPosts, setHasNewPosts] = useState(false);

  useEffect(() => {
    const unsubscribe = getPosts();
    console.log({feedItems});
    return () => {
      // cleanup
      if (typeof unsubscribe === "function") {
        unsubscribe(); // this function is given back by onSnapshot
      }
    };
  }, [props.user && props.user.email]);

  useEffect(() => {
    getNewPostData(props.isNewPostImageUploadDone);
  }, [props.isNewPostImageUploadDone]);

  /* get posts */
  const getPosts = async () => {
    const q = query(
      collection(db, "posts"),
      // where("uid", "in", [props.user.uid]),
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
              uid: docData.uid,
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
  const getNewPostData = async (newPostReference) => {
    console.log("call: new getNewPostData", newPostReference);
    // in case of having a new post from the <ShareBox> component, upliading image is async process -> after getting the Redux notification we need to get the new post item with the belonging images
    if (newPostReference) {
      // console.log("step 1");
      // add image infomration to the new post that is already in the component state, thanks to the onSnapshot API

      if (feedItems.some((arrItem) => arrItem.id === newPostReference)) {
        let imgArray = [];
        // console.log("step 1 MORE", newPostReference);

        return getRelatedImages(newPostReference).then((images) => {
          console.log("getRelatedImages images", images);
          images.map((item) => {
            imgArray.push({
              url: item,
              title: "",
            });
          });

          // add the new image information to the belonging post item in the component's state
          const newState = [...feedItems];
          console.log("newState", newState);

          newState.map((item) => {
            if (item.id === newPostReference) {
              item.images = imgArray;
              item.isNewPost = true;
              console.log("foundthis", item.id);
            }
          });

          setTimeout(() => {
            setFeedItems((oldState) => {
              console.log("UPDATING NOW");
              return [...newState];
            });
          }, 2000);

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

      {hasNewPosts && (
        <ButtonNewPost id="button-new-post" aria-label="New posts">
          New posts
        </ButtonNewPost>
      )}

      {props.isNewPostImageUploadDone && (
        <p>{props.isNewPostImageUploadDone}</p>
      )}

      <FeedList key="feed-list">
        {feedItems.map((item, index) => (
          <FeedListItem
            content={{...item}}
            key={`feed-list-item-${item.id}-index`}
            parentkey={`feed-list-item-${item.id}-index`}
            className={`feed-list-item-${item.id}-index`}
          />

          // <p
          //   content={item}
          //   key={`feed-list-item-${item.id}-index`}
          //   parentkey={`feed-list-item-${item.id}-index`}
          //   className={`feed-list-item-${item.id}-index`}
          // >
          //   {item.id}
          //   {!!item.images.length && (
          //     <img style={{ width: "200px" }} src={item.images[0].url} />
          //   )}
          // </p>
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
    border-top: 1px solid ${variables.colors.maincolor16};
    margin-right: 8px;
  }

  span {
    color: ${variables.colors.maincolor3};
    margin-right: 4px;
    &:nth-child(3) {
      color: ${variables.colors.maincolor3er};
      font-weight: 700;
    }
  }
`;

const FeedList = styled.div``;

/*=====  React-redux related functions  ======*/

// any time the store is updated, mapStateToProps will be called. Expected to return an object
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
    isNewPostImageUploadDone: state.postSettingState.isNewPostImageUploadDone,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setImagesUploadDone: (postRef) => {
      dispatch(actionIsImagesUploadDone(postRef));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
