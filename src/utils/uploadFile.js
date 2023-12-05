import React, { useState } from "react";

// firebase
import { db, auth, storage } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getFileExtension, getFileName, safeFileName } from "./filename";

/*=============================================
= Firebase storage: upload and download actions
=============================================*/

/* Upload file */

export const UploadFile = async ({ folder = "images", imageAsFile, setUrl }) => {
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

// Firebase save content into Firestore 'database'
export const SaveContentIntoFirebase = async (collectionName, contentObj, callback) => {
  // return (dispatch) => { }

  // save into Firebase database
  try {
    const docRef = await addDoc(collection(db, collectionName), contentObj);
    console.log("Document written with ID: ", docRef.id);

    // run callback
    if (typeof callback === "function") {
      callback.call(this, docRef);
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
/*=====  End of Firebase storage: upload and download actions  ======*/


