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

import { cities, skills, testUserData, testUserDataBlank } from "./demoData";

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
export const createUserExtraEntry = (uid, isDemo = true) => {
  let userProfileData;

  // An empty user object is;
  userProfileData = generateUserExtraData(uid, isDemo);

  return SaveContentIntoFirebase("users-extra-data", userProfileData)
    .then((result) => {
      console.log("Creating user extra data is DONE");
    })
    .catch((error) => {
      console.error(error.message);
    });
};

export const generateUserExtraData = (uid, isDemo) => {
  let newData;

  const getRandomItems = (count, arrayName) => {
    let results = [];

    for (let i = 0; i < count; i++) {
      let selectedItem =
        arrayName[Math.floor(Math.random() * arrayName.length)];

      if (!results.includes(selectedItem)) {
        results.push(selectedItem);
      }
    }

    return results;
  };

  const userDataBlank = testUserDataBlank(uid);
  const userData = testUserData(uid);

  userData.experience.map((item) => {
    item.location = getRandomItems(1, cities)[0];
    item.skills = getRandomItems(4, skills);
  });

  if (isDemo) {
    newData = userData;
  } else {
    newData = userDataBlank;
  }

  console.log({ newData });
  return newData;
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
  console.log("call: getUserProfile");
  let profilePageData;
  let profilePageExtraData;

  let options = {
    where: ["uid", "==", puid],
  };

  if (!fullProfile) {
    profilePageData = ReadContentFromFirebase("users", options);
    return profilePageData;
  }

  if (fullProfile) {
    profilePageData = ReadContentFromFirebase("users", options);
    profilePageExtraData = ReadContentFromFirebase("users-extra-data", options);
    return Promise.all([profilePageData, profilePageExtraData]).then(function (
      resultsArray
    ) {
      console.log({ resultsArray });
      // resultsArray[0] is result of profilePageData
      // resultsArray[1] is result of profilePageExtraData

      let extraData = "";
      if (resultsArray[1][0]) {
        extraData = resultsArray[1][0];
      }
      return {
        ...resultsArray[0][0],
        extra: { ...extraData },
      };
    });
  }
};

/**
 * Save all information into Firebase, after editing user profile page
 * @param {String} puid - Profile User ID
 * @param {Object} userData - Extra data we need to save into database
 * @return {Boolean} Success flag
 */
export const saveUserProfileChanges = async (
  userData,
  withExtra = false,
  callback = () => {}
) => {
  const documentID = userData.id;
  const extraDocumentID = userData.extra.id;
  const extraInformation = { ...userData.extra };

  delete userData.extra; // reset
  console.log("saveUserProfileChanges userData: ", userData);

  // save post content into Firestore
  ModifyContentInFirebase("users", documentID, userData, (response) => {
    // run any callbak function
    if (typeof callback === "function") {
      callback.call(this);
    }
  });

  if (withExtra) {
    ModifyContentInFirebase(
      "users-extra-data",
      extraDocumentID,
      extraInformation,
      (response) => {
        // run any callbak function
        if (typeof callback === "function") {
          callback.call(this);
        }
      }
    );
  }
};
