/**
 *
 * Some demo data for populating pages of this DEMO
 * 2023, Robert Koteles
 */

export const cities = [
  "London",
  "Paris",
  "Athen",
  "Budapest",
  "New York",
  "San Fransisco",
];

export const skills = [
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

export const companies = [
  {
    name: "Apple",
    icon: "/upload/logo-apple.svg",
  },
  {
    name: "Google",
    icon: "/upload/logo-google.svg",
  },
  {
    name: "Forbes",
    icon: "/upload/logo-forbes.svg",
  },
  {
    name: "Amazon",
    icon: "/upload/amazon-logo.svg",
  },
  {
    name: "IBM",
    icon: "/upload/ibm-logo.svg",
  },
  {
    name: "Samsung",
    icon: "/upload/samsung-logo.svg",
  },
  {
    name: "BMW",
    icon: "/upload/logo-bmw.svg",
  },
];

export const recommendations = [
  {
    image: "/images/avatar.svg",
    title: "John Doe",
    content:
      "It has truly been a pleasure working with Robert Koteles, and I have no doubt that [he/she] will be a valuable asset to any team or project. I highly recommend [him/her] to anyone seeking a seasoned frontend developer who can consistently deliver exceptional results.",
  },
  {
    image: "/images/avatar.svg",
    title: "Johhny Doe",
    content:
      "Robert Koteles possesses an in-depth understanding of frontend technologies, including but not limited to HTML, CSS, and JavaScript. Their ability to translate design concepts into seamless, responsive user interfaces is truly impressive. What sets [him/her] apart is his dedication to staying current with industry trends and best practices, ensuring our projects always leverage the latest and most effective technologies.",
  },
  {
    image: "/images/avatar.svg",
    title: "Bob Doe",
    content:
      "I had the pleasure of working closely with Robert Koteles for the past 5 years, and I wholeheartedly recommend them as a senior frontend developer. His technical expertise and commitment to delivering high-quality solutions have significantly contributed to the success of our projects.",
  },
  {
    image: "/images/avatar.svg",
    title: "Johhny English",
    content:
      "In addition to his technical skills, Robert Koteles is a problem-solver who approaches challenges with a proactive mindset. His innovative thinking and attention to detail have been instrumental in identifying and implementing optimizations that have positively impacted the overall performance and user experience of our applications.",
  },
  {
    image: "/images/avatar.svg",
    title: "Bill Gates",
    content:
      "Beyond technical prowess, Robert Koteles is a collaborative team player who consistently goes above and beyond to meet project deadlines. [He/She] excels at communicating complex technical concepts in a way that is accessible to both technical and non-technical stakeholders, fostering a positive and efficient working environment.",
  },
];

export const testUserDataBlank = (uid) => ({
  uid: uid ? uid : null,
  about: "",
  experience: [
    {
      logo: "",
      name: "",
      position: "",
      from: "",
      to: "",
      info: "",
      location: "",
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
});
export const testUserData = (uid) => ({
  uid: uid ? uid : "",
  about:
    "Hi, my name is above, and I'm a recent graduate of Cryptonite University's Superman program. I believe that a company's workforce is its most powerful asset. That's why I've dedicated myself to learning skills that make identifying and retaining top talent as simple as possible. Ultimately, every department needs a great team to thrive, and I look forward to putting my knowledge into action, ensuring that your company is positioned for success through smart talent acquisitions.",

  experience: [
    {
      logo: "/upload/amazon-logo.svg",
      name: "Amazon",
      position: "Senior Package Opener",
      from: "2014",
      to: "2023",
      info: "",
      location: "London, Greater London",
      skills: "",
    },
    {
      logo: "/upload/samsung-logo.svg",
      name: "Samsung",
      position: "CEO",
      from: "2004",
      to: "2014",
      info: "",
      location: "London, Greater London",
      skills: "",
    },
    {
      logo: "/upload/friends-logo.svg",
      name: "F.R.I.E.N.D.S.",
      position: "Cast Director",
      from: "1994",
      to: "2004",
      info: "The placeholder text, beginning with the line 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', looks like Latin because in its youth, centuries ago, it was Latin.",
      location: "New York City",
      skills: "",
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
      title: "Web Design and Development",
      organisation: "eCornell",
      issued: "2023",
      credential: "Credential ID 819943",
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
});
