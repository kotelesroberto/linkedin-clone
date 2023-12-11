/**
 *
 * Component: About
 * @desc This component uses a parser that parses HTML content to render (without it all HTML element is rendered as simple raw content)
 * @author Robert Koteles
 * @version 1.0.0
 */

import React from "react";
import ProfileCardBox from "./ProfileCardBox";

const ProfileCardAbout = (props) => {
  const profileUid = props.profileuid;
  const isEditMode = props.iseditmode ? props.iseditmode : false;

  const content = `
    <p>
    I am an experienced Senior Frontend Web and Application Developer, Team leader and also an ex Full-stack developer with a demonstrated history of working in the information technology, retail and service industry since 2006. During my career I always focused on delivering high quality, effective solutions. 
    </p>
    <p>
    Because the world of IT is constantly changing I am always keen to learn new methods and technologies, and with a genuine interest for the best user experience.
    </p>
    <p>
    I have strong organizational skills, I am a proactive team player with a can-do attitude. I always had to focus on more things at the same time, so multitasking is my second nature. I am self-motivated and also an independent worker, if needed. I try to be as creative as I just could to bring something great to the table. A friendly, reliable guy is who I am.
    </p>
    <p>
    Graduated in Master of Computer Technology and Math and I truly believe in the concept of a lifelong learning approach.
    </p>
    <p>
    Skilled in W3C, HTML, xHTML, HTML5, CSS, CSS3, SASS, LESS, SEO, React (React Router, React Context, REDUX, Redux Toolkit, etc.), React Native, OO/Vanilla Javascript (ES5, ES6), jQuery, Node.js, Restful API (synchronous/asynchronous AJAX, XML, JSON), DevOps (GIT, TOWER, GITHUB, SourceTree, SVN, Bitbucket, JIRA), Gulp, Grunt, Webpack, Jenkins, Mustache, Handlebars, Jade, Liquid, AWS, S3 bucket, Adobe Target, A/B tests, Heroku, Serverless technology, Express, Axios, Firebase, MongoDB, Stripe, Bootstrap, Web fonts, Responsive design, TweenMax, GreenSock, CSS3 and Javascript animations, Joomla, WordPress, AEM, Shopify, XSL.
    </p>
    <p>
    Also have great understanding (but not coding in) of C, PHP, ImageMagick, GD2, MySQL, PostgreSQL, phpMyAdmin, Memcached, Matomo.
    </p>
    `;


  return (
    <ProfileCardBox
      title="About"
      panel="about"
      content={content}
      iseditmode={isEditMode}
    ></ProfileCardBox>
  );
};

export default ProfileCardAbout;
