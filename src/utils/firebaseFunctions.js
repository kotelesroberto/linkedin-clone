import React, { useState } from "react";

// firebase
import { db, auth, storage } from "../firebase/firebase";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  query,
  where,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getFileExtension, getFileName, safeFileName } from "./filename";

/*=============================================
= Firebase storage: upload and download actions
=============================================*/

/* Upload file */

export const UploadFile = async ({
  folder = "images",
  imageAsFile,
  setUrl,
}) => {
  console.log("start of upload");

  // error handling
  if (imageAsFile === "") {
    console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    setUrl("");
    return;
  }

  const newFileName =
    getFileName(imageAsFile.name) +
    "-" +
    safeFileName(25) +
    "." +
    getFileExtension(imageAsFile.name);

  // Create a reference to 'mountains.jpg'
  const storageRef = ref(storage, `/${folder}/${newFileName}`);

  // upload to Firebase
  const uploadImage = uploadBytesResumable(storageRef, imageAsFile);

  // Register three observers:
  // 1. 'state_changed' observer, called any time the state changes
  // 2. Error observer, called on failure
  // 3. Completion observer, called on successful completion
  // get back the file (name and path) from firebase as an imageUrl
  uploadImage.on(
    "state_changed",
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //takes a snap shot of the process as it is happening
      console.log(`Upload of ${newFileName} is " + ${progress} + "% done`);

      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      // Handle unsuccessful uploads
      console.log(error);
    },
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(uploadImage.snapshot.ref).then((fireBaseUrl) => {
        console.log("File available at", fireBaseUrl);
        setUrl(fireBaseUrl);
      });
    }
  );
};

/**
 * Save new content as document into Firebase collection
 * @desc Save new content as document into Firebase collection
 * @param {string} param.collectionName - Name of the collection
 * @param {string} param.contentObj - Object that holds the data
 * @param {Function} callback - Callback function after operation is done
 *
 * Usage
 * ------
 * let data = {
 *     postid: 1234,
 *     uid: hjbkl;,
 *     avatar: '/path/image.jpg',
 *     displayName: 'John Doe,
 *     userlink: "",
 *     timestamp: Date.now(),
 *     text: 'Some text',
 *     comments: "",
 *     likes: [],
 *   };
 *
 * SaveContentIntoFirebase(
 *  "posts",
 *  data,
 *  () => { }
 * );
 *
 */
export const SaveContentIntoFirebase = async (
  collectionName,
  contentObj,
  callback = () => {}
) => {
  // save into Firebase database
  try {
    const docRef = await addDoc(collection(db, collectionName), contentObj);
    console.log("Document written with ID: ", docRef.id);

    // run callback
    // if (typeof callback === "function") {
    //   callback.call(this, docRef);
    // }

    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
};

/**
 *  Modify document in Firebase collection
 * @desc Modify document in Firebase collection
 * @param {string} param.collectionName - Name of the collection
 * @param {string} param.documentID - document ID
 * @param {string} param.contentObj - Object that holds the data
 * @param {Function} callback - Callback function after operation is done
 *
 * Usage
 * ------
 * let data = { numComments: newCountComments };
 *
 * ModifyContentInFirebase(
 *  "posts",
 *  originalPostID,
 *  data,
 *  () => { }
 * );
 *
 */
export const ModifyContentInFirebase = async (
  collectionName,
  documentID,
  contentObj,
  callback
) => {
  try {
    const docRef = await setDoc(
      doc(db, collectionName, documentID),
      contentObj,
      { merge: true }
    );

    // run callback
    if (typeof callback === "function") {
      callback.call(this, docRef);
    }
  } catch (e) {
    console.error("Error modifying document: ", e);
  }
};

/**
 *  Read content from Firebase collection
 * @desc Read content from Firebase collection
 * @param {string} param.collectionName - Name of the collection
 * @param {Array} param.options - An array that contains all clauses: where, orderBy, limit
 *
 * Usage
 * ------
 * Multiple where:
 * let options = {where: [["category", "==", "someCategory"], ["color", "==", "red"], ["author", "==", "John Doe"]], orderBy: ["date", "desc"], limit: 100};
 * //OR
 * A single where:
 * let options = {where: ["category", "==", "someCategory"]};
 * let documents = ReadContentFromFirebase("posts", options);
 *
 */
export const ReadContentFromFirebase = async (collectionName, options = {}) => {
  const optWhere = options.where;
  const optOrderBy = options.orderBy;
  const optLimit = options.limit;

  let arrWhere = [];
  let arrOrderBy = [];
  let arrLimit = [];

  if (optWhere) {
    if (optWhere[0] instanceof Array) {
      // It's an array of array
      for (let w of optWhere) {
        arrWhere.push(where(...w));
      }
    } else {
      arrWhere.push(where(...optWhere));
    }
  }
  if (optOrderBy) {
    if (optOrderBy[0] instanceof Array) {
      // It's an array of array
      for (let w of optOrderBy) {
        arrOrderBy.push(orderBy(...w));
      }
    } else {
      arrOrderBy.push(orderBy(...optOrderBy));
    }
  }

  if (optLimit) {
    arrLimit.push(limit(optLimit));
  }

  // make the quesry expression ready
  let queryExpression = [];
  queryExpression.push(collection(db, collectionName));
  arrWhere.map((item) => queryExpression.push(item));
  arrOrderBy.map((item) => queryExpression.push(item));
  arrLimit.map((item) => queryExpression.push(item));

  let q = query(...queryExpression);
  let result = [];

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.id
    result.push(doc.data());
  });

  return result;
};
/*=====  End of Firebase storage: upload and download actions  ======*/
