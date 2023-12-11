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
 * createUserEntry(user);
 */
export const createUserEntry = (data) => {
  let newUser = {
    uid: data.uid ? data.uid : "",
    shortDescription: "",
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
 * Create exra user document in the 'users-extra-data' collection
 *
 * @param {Object} data - Data object
 *
 * Usage
 * ------
 * const user = {
 *   email: "koteles.roberto@gmail.com",
 * };
 *
 * createUserEntry(user);
 */
export const createUserExtraEntry = (uid) => {
  // An empty user object is;
  const userProfileData = {
    uid: uid ? uid : "",
    about: "",
    experience: [
      {
        logo: "",
        name: "",
        from: "",
        to: "",
        location: "",
        info: "",
        skills: "",
      },
    ],
    education: [
      {
        logo: "",
        name: "",
        degree: "",
        field: "",
        from: "",
        to: "",
        grade: "",
        info: "",
      },
    ],
    certifications: [
      {
        logo: "",
        name: "",
        organisation: "",
        issued: "",
        info: "",
        url: "",
      },
    ],
    skills: [],
    awards: [
      {
        title: "",
        issueBy: "",
        logo: "",
        issueDate: "",
        info: "",
      },
    ],
    languages: [
      {
        title: "",
        level: "",
      },
    ],
    interests: [
      {
        name: "",
        subname: "",
        logo: "",
        url: "",
        info: "",
      },
    ],
  };

  return SaveContentIntoFirebase("users-extra-data", userProfileData).then(
    (result) => {
      console.log("Creating user extra data is DONE");
    }
  );
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

/**
 *
 * Get profile page's user ID
 * @return {string} ID os the user that belongs to the profile page
 */

export const getUserProfileID = () => {
  // get user id of this profile. This is an uid, that belongs to this profile page
  const profileUid = window.location.pathname.replace("/in/", "");
  return profileUid;
};

/**
 * Get all information that we need for displaying this user profile page
 * @param {String} puid - Profile User ID
 * @return {Object} All information of this profile page, as an object
 */
export const getUserProfile = async (puid, fullProfile) => {
  let profilePageData = {};
  let profilePageExtraData = {};

  console.log("call: getUserProfile");

  let options = {
    where: ["uid", "==", puid],
  };

  if (fullProfile) {
    profilePageData = ReadContentFromFirebase("users", options);
    return profilePageData;
  }

  if (fullProfile) {
    return Promise.all([
      ReadContentFromFirebase("users", options),
      ReadContentFromFirebase("users-extra-data", options),
    ]).then(function (valArray) {
      // valArray[0] is result of promise0
      // valArray[1] is result of promise1

      return { ...valArray[0], ...valArray[(1, { hasExtra: true })] };
    });

    // profilePageExtraData.extra = ReadContentFromFirebase(
    //   "users-extra-data",
    //   options
    // );
  }

  // return { ...profilePageData, ...profilePageExtraData };
};
