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

  const cities = [
    "London",
    "Paris",
    "Athen",
    "Budapest",
    "New York",
    "San Fransisco",
  ];

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Angular",
    "Vue.js",
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "Responsive Design",
    "Version Control (e.g., Git)",
    "Webpack",
    "Sass/Less",
    "Testing (e.g., Jest, Mocha, Chai)",
    "Database Management (e.g., MongoDB, MySQL)",
    "GraphQL",
    "JSON/XML",
    "Web Performance Optimization",
    "Cross-Browser Compatibility",
    "Command Line/Shell Scripting",
  ];

  const userData = {
    uid: uid ? uid : "",
    about:
      "Hi, my name is above, and I'm a recent graduate of Cryptonite University's Superman program. I believe that a company's workforce is its most powerful asset. That's why I've dedicated myself to learning skills that make identifying and retaining top talent as simple as possible. Ultimately, every department needs a great team to thrive, and I look forward to putting my knowledge into action, ensuring that your company is positioned for success through smart talent acquisitions.",

    experience: [
      {
        logo: "/upload/amazon-logo.svg",
        name: "Amazon",
        from: "2014",
        to: "2023",
        info: "",
      },
      {
        logo: "/upload/samsung-logo.svg",
        name: "Samsung",
        from: "2004",
        to: "2014",
        info: "",
      },
      {
        logo: "/upload/friends-logo.svg",
        name: "F.R.I.E.N.D.S.",
        from: "1994",
        to: "2004",
        info: "The placeholder text, beginning with the line 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', looks like Latin because in its youth, centuries ago, it was Latin.",
      },
    ],
    education: [
      {
        logo: "/upload/university_of_debrecen.jpg",
        name: "University of Debrecen",
        degree: "University degree, Mathematics",
        field: "Information Technology",
        from: "2010",
        to: "2015",
        grade: "Master",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        logo: "/upload/university_of_debrecen.jpg",
        name: "University of Debrecen",
        degree: "University degree, Computer Science",
        field: "Information Technology",
        from: "2015",
        to: "2020",
        grade: "Master",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
    certifications: [
      {
        logo: "/upload/certified.svg",
        name: "Web Design and Development",
        organisation: "eCornell",
        issued: "2023",
        info: "This certification program, which eCornell offers, teaches the fundamental components of front-end development and web design to people with little web development experience. When completing this program, you take six courses that include two weeks of instruction each.",
        url: "https://ecornell.cornell.edu/certificates/technology/web-design-and-development/",
      },
    ],
    skills: [...skills],
    awards: [
      {
        title: "Official Garbage Collector",
        issueBy: "Google",
        logo: "/upload/icon-award.svg",
        issueDate: "2020",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        title: "Pole dancer",
        issueBy: "Dancing in the Stars",
        logo: "/upload/icon-award.svg",
        issueDate: "2023",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    ],
    languages: [
      {
        title: "English",
        level: "A2",
      },
      {
        title: "Latin",
        level: "A1",
      },
      {
        title: "Sign langage",
        level: "Handy",
      },
      {
        title: "Body language",
        level: "Excellent",
      },
    ],
    interests: [
      {
        name: "Google",
        subname: "And all departments",
        logo: "/upload/logo-google.svg",
        url: "https://wwww.google.co.uk",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  };

  userData.experience.map((item) => {
    item.location = getRandomItems(1, cities);
    item.skills = getRandomItems(4, skills);
  });

  const userDataBlank = {
    uid: uid ? uid : null,
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
  puid,
  userData,
  callback = () => {}
) => {
  const documentID = userData.extra.id;
  console.log("saveUserProfileChanges userData: ", userData);

  // save post content into Firestore
  ModifyContentInFirebase(
    "users-extra-data",
    documentID,
    userData.extra,
    (response) => {
      // run any callbak function
      if (typeof callback === "function") {
        callback.call(this);
      }
    }
  );
};
