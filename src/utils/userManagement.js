/**
 *
 * Functions to handle user's data
 * - When user logs in by Google, it looks after the belonging record in 'users' collection
 *  - if it's not exist, do create it
 *  - if it's exist, do read it out
 * - When user signs up by email/password, it will create a new entry in the 'users' collection
 * - When user sign in by email/password, it will read the relevant data from the 'users' collection
 *
 */

import {
  SaveContentIntoFirebase,
  ModifyContentInFirebase,
  ReadContentFromFirebase,
} from "./firebaseFunctions";

import { safeFileName } from "./filename";

/**
 *
 * Create new user document in the 'users' collection
 *
 * @param {Object} data - Data object
 *
 * Usage
 * ------
 * const user = {
 *   email: "koteles.roberto@gmail.com",
 * };
 *
 * CreateUserEntry(user);
 */
export const CreateUserEntry = (data) => {
  let newUser = {
    uid: data.uid ? data.uid : "",
    about: "",
    birthday: "",
    displayName: data.displayName ? data.displayName : "",
    email: data.email ? data.email : "",
    location: "",
    photoURL: data.photoURL ? data.photoURL : "",
    teaserImage: "",
    username: data.email ? data.email : "",
    emailVerified: data.emailVerified ? data.emailVerified : false,
    phoneNumber: "",
    shorturl: data.uid ? data.uid : "",
  };

  return SaveContentIntoFirebase("users", newUser).then((result) => {
    console.log("Creating user is DONE");
  });
};

/**
 *
 * Read an user document from the 'users' collection
 * @param {Object} data - Data object
 *
 * Usage
 * ------
 * const userInfo = {
 *   uid: "123",
 *   email: "koteles.roberto@gmail.com",
 *   username: "koteles.roberto@gmail.com",
 * };
 *
 * doReadUserEntry(userInfo);
 */
export const doReadUserEntry = async (data) => {
  let options = {
    where: [],
  };

  for (const key in data) {
    options.where.push([key, "==", data[key]]);
  }

  console.log({ options });

  return ReadContentFromFirebase("users", options);
};
