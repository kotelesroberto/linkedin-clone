/**
 *
 * Some demo data for populating pages of this DEMO
 * 2023, Robert Koteles
 */

export const peopleMayYouKnow = [
  {
    name: "Janis Joplin",
    position: "Singer and story teller",
    avatar: "/images/avatar.svg",
    link: "./in/demo",
  },
  {
    name: "Jimi Hendrix",
    position:
      "American guitarist, songwriter and singer. Although his mainstream career spanned only four years, he is widely regarded as the greatest and one of the most influential electric guitarists in the history of popular music",
    avatar: "/images/avatar.svg",
    link: "./in/demo",
  },
  {
    name: "Eric Clapton",
    position: "Guitarist",
    avatar: "/images/avatar.svg",
    link: "./in/demo",
  },
  {
    name: "Superman",
    position: "(Clark Kent in incognito)",
    avatar: "/images/avatar.svg",
    link: "./in/demo",
  },
];

export const companiesMayYouKnow = [
  {
    name: "Google",
    position: "Tech giant",
    avatar: "/upload/logo-google.svg",
    link: "/demo",
  },
  {
    name: "IBM",
    position: "Tech giant",
    avatar: "/upload/ibm-logo.svg",
    link: "/demo",
  },
];

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
    content2:
      "It has truly been a pleasure working with [username], and I have no doubt that [he/she] will be a valuable asset to any team or project. I highly recommend [him/her] to anyone seeking a seasoned frontend developer who can consistently deliver exceptional results.",
  },
  {
    image: "/images/avatar.svg",
    title: "Johhny Doe",
    content2:
      "[username] possesses an in-depth understanding of frontend technologies, including but not limited to HTML, CSS, and JavaScript. Their ability to translate design concepts into seamless, responsive user interfaces is truly impressive. What sets [him/her] apart is his dedication to staying current with industry trends and best practices, ensuring our projects always leverage the latest and most effective technologies.",
  },
  {
    image: "/images/avatar.svg",
    title: "Bob Doe",
    content2:
      "I had the pleasure of working closely with [username] for the past 5 years, and I wholeheartedly recommend them as a senior frontend developer. His technical expertise and commitment to delivering high-quality solutions have significantly contributed to the success of our projects.",
  },
  {
    image: "/images/avatar.svg",
    title: "Johhny English",
    content2:
      "In addition to his technical skills, [username] is a problem-solver who approaches challenges with a proactive mindset. His innovative thinking and attention to detail have been instrumental in identifying and implementing optimizations that have positively impacted the overall performance and user experience of our applications.",
  },
  {
    image: "/images/avatar.svg",
    title: "Bill Gates",
    content2:
      "Beyond technical prowess, [username] is a collaborative team player who consistently goes above and beyond to meet project deadlines. [He/She] excels at communicating complex technical concepts in a way that is accessible to both technical and non-technical stakeholders, fostering a positive and efficient working environment.",
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

export const messages = [
  {
    id: 1,
    photo: "/images/demo/avatar-support-girl.svg",
    name: "Alice Smith",
    msgchain: [
      {
        message:
          "Competitive salary and benefits package. As a Frontend Developer at the company, you will play a crucial role in designing and implementing user interfaces for our cutting-edge [products/services]. You will work closely with our cross-functional team of designers and backend developers to ensure a smooth and responsive user experience.",
        timestamp: 1702331640000,
      },
    ],
  },
  {
    id: 2,
    photo: "/images/demo/avatar-man.svg",
    name: "John Doe",
    msgchain: [
      {
        message:
          "Hey there! I hope this message finds you well. We are currently looking for a talented and motivated Frontend Developer to join our dynamic team at the company. With your exceptional skills and passion for creating seamless user experiences, we believe you would be a great fit for this role.",
        timestamp: 1702126440000,
      },
    ],
  },

  {
    id: 3,
    photo: "/images/demo/avatar-man-2.svg",
    name: "Bob Johnson",
    msgchain: [
      {
        message: "Just checking in and saying hi. Hope you're doing well! ",
        timestamp: 1701899640000,
      },
    ],
  },
  {
    id: 4,
    photo: "/images/demo/avatar-girl.svg",
    name: "Angelina Smith",
    msgchain: [
      {
        message:
          "This role needs strong proficiency in HTML, CSS, and JavaScript. Opportunities for professional growth and development. Exciting projects and the chance to make a real impact.",
        timestamp: 1702328032774,
      },
    ],
  },
  {
    id: 5,
    photo: "/images/demo/avatar-man.svg",
    name: "Tom Jones",
    msgchain: [
      {
        message:
          "Hi mate! If you wanna play on my next gig, call me. You know my number, I am waiting for your call. Playing together again will be hillarious!",
        timestamp: 1702328052774,
      },
    ],
  },
  {
    id: 6,
    photo: "/images/demo/avatar-man.svg",
    name: "Recrui Terry",
    msgchain: [
      {
        message:
          "I hope you're having a fantastic week. I stumbled upon your profile and was genuinely impressed by your extensive experience in software development. I'd like to introduce you to some exciting opportunities we have available for Frontend Developers at us.",
        timestamp: 1702328052774,
      },
    ],
  },
  {
    id: 7,
    photo: "/images/demo/avatar-man.svg",
    name: "Bastar Daniel",
    msgchain: [
      {
        message:
          "We present you with more than 50 diverse Frontend Developer roles that span across the UK, and we also offer remote options. Our esteemed partners include well-known organizations like PlayStation, BBC, Discovery, and many others. What sets hackajob apart is our ability to directly connect you with these industry leaders, as well as various other companies, utilizing our cutting-edge online recruitment platform.",
        timestamp: 1702328052774,
      },
    ],
  },
];

export const activity = [
  {
    id: 1,
    type: "posted this",
    content:
      "Lorem ipsum dolor sit amet. Et incidunt obcaecati eos dicta deserunt ut nobis sint. Ad optio impedit cum quia galisum est facilis pariatur sed maiores eligendi qui voluptatem blanditiis ea sunt nostrum. A distinctio neque est voluptatem velit qui dolore optio?",
    image: "/upload/friends-logo.svg",
    imagetext:
      "Friends is an American television sitcom created by David Crane and Marta Kauffman, which aired on NBC from September 22, 1994, to May 6, 2004, lasting ten seasons.",
    timestamp: 1702331640000,
  },
  {
    id: 2,
    type: "posted this",
    content: "A distinctio neque est voluptatem velit qui dolore optio?",
    image: "/upload/amazon-logo.svg",
    imagetext: "Simply Amazon",
    timestamp: 1702331640000,
  },

  {
    id: 3,
    type: "educated here",
    content: "A distinctio neque est voluptatem velit qui dolore optio?",
    image: "/upload/certified.svg",
    imagetext:
      "Achieve your career ambitions in a world-renowned city and supportive learning environment.",
    timestamp: 1702331640000,
  },

  {
    id: 4,
    type: "earned this award",
    content:
      "As head of the bank's US credit business, he got an award of £2.18m.",
    image: "/upload/icon-award.svg",
    imagetext:
      "A new digital innovation award is aimed at media that uses the latest technology to make an improvement in delivery of news services",
    timestamp: 1702331640000,
  },
];
