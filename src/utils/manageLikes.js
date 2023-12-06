import { ModifyContentInFirebase } from "./uploadFile";

/**
 *
 * Manage likes
 * 2023, Robert Koteles
 * @param {object} dataObj - data, structure is:
 * @param {string} dataObj.collection - name of Firestore collection
 * @param {string} dataObj.documentID - document id in the collection
 * @param {object} dataObj.user - logged in user information
 * @param {Array} dataObj.likes - like information of the item this doLike() function is called on. The array contains user ids.
 * @callback: function, it runs after operation is done
 */
export const doLike = (e, dataObj, callback = () => {}) => {
  e.preventDefault();
  e.target.setAttribute("disabled", "disabled");

  console.log({ dataObj });

  let isPostLiked = true;
  const index = dataObj.likes.indexOf(dataObj.user.uid);
  let data;

  if (index !== -1) {
    // the logged in user already liked this post
    dataObj.likes.splice(index, 1);
    data = {
      likes: dataObj.likes,
    };

    isPostLiked = false;
  } else {
    // the logged in user never liked this post
    data = {
      likes: [...dataObj.likes, dataObj.user.uid],
    };
  }

  // save post content into Firestore
  ModifyContentInFirebase(
    dataObj.collection,
    dataObj.documentID,
    data,
    (response) => {
      const responseObj = {
        likes: data.likes,
        isPostLiked: isPostLiked,
      };

      if (typeof callback === "function") {
        callback.call(this, responseObj);
      }

      e.target.removeAttribute("disabled");
    }
  );
};
