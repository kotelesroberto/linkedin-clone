import React, { useState } from "react";
import styled from "styled-components";
import * as variables from "../_library/Variables";
import { Card } from "../_library/Cards";

const DemoWarningPopup = (props) => {
  const demoWarning = props.demowarning;
  const setDemoWarning = props.setdemowarning;

  return (
    <WarningContainer>
      <WarningBG />
      <WarningContent>
        <WarningContentInner>
          <h2>Dear Visitor!</h2>
          <p>
            Welcome to my 🔥🔥🔥<strong>DEMO</strong>🔥🔥🔥 portfolio item! As
            you may aware, this is 🚫🚫🚫<strong>NOT</strong>🚫🚫🚫 a real
            website but one of my portfolio items. The page doesn't collect any
            sensitive information, it's made for demonstrative purposes, not for
            🚫Phishing🚫. I don't need your data. 😇
          </p>
          <p>
            Every piece of code is done by me by using{" "}
            <strong>
              React, React styled components, React Redux, State management,
              SASS, Firebase, JavaScript (ES7)
            </strong>
            .
          </p>
          <p>
            The webapp uses a Cookie (<i>demoWarningPopup</i>, stored for 7
            days) that is only a flag for showing/hiding the DEMO welcome
            message after each pageload.
          </p>
          <p>
            To check the source files please visit my{" "}
            <a
              href="https://github.com/kotelesroberto/linkedin-clone"
              target="_blank"
            >
              GitHub project
            </a>
            .
          </p>
          <p>
            <u>On this demo site you can use many features, for instance:</u>
          </p>
          <ul>
            <li>do registration</li>
            <li>do login by email/password</li>
            <li>do login by Google account</li>
            <li>
              on the posts page:
              <ul>
                <li>activate the content boxes</li>
                <li>read posts</li>
                <li>
                  create a new post
                  <ul>
                    <li>simple post with emojis</li>
                    <li>
                      simple post with emojis + batch media uploader up to 5
                      images / post
                    </li>
                    <li>
                      write content and add Youtube link to extract and show it
                      in a video player
                    </li>
                  </ul>
                </li>
                <li>read/write comments to a post</li>
                <li>like a post</li>
              </ul>
            </li>
            <li>
              use the Chat feature (hide and show message items, filter to
              sender, open a message, do chat). The entire Chat feature is done
              without using any bootstrap or plugin.
            </li>
            <li>visit the Jobs page</li>
            <li>
              edit user profile:
              <ul>
                <li>change user photo</li>
                <li>change user cover photo</li>
                <li>change user information</li>
                <li>change user about section</li>
              </ul>
            </li>
          </ul>
          <p>&nbsp;</p>
          <p>Thank you,</p>
          <p>
            <a
              href="https://www.linkedin.com/in/robertkoteles/"
              target="_blank"
            >
              Robert Koteles, Senior Frontend Developer
            </a>{" "}
            <i> (and yes, you can HIRE me)</i>
          </p>
        </WarningContentInner>

        <WarningClose onClick={(e) => setDemoWarning("hide")}>
          <img
            src="/images/icon-close.svg"
            alt="Close Chat"
            className="icon-close"
          />
        </WarningClose>
      </WarningContent>
    </WarningContainer>
  );
};

const WarningContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WarningBG = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: ${variables.colorDefinitions.black};
  opacity: 0.6;
`;
const WarningContent = styled(Card)`
  width: 90%;
  max-width: 1000px;
  padding: 20px;
  position: relative;
  height: 80%;
`;

const WarningContentInner = styled.div`
  height: 100%;
  overflow-y: auto;
  line-height: 1.5;

  h2 {
    margin-bottom: 12px;
  }

  ul {
    margin: 0;
  }

  li {
    margin-bottom: 4px;
  }

  p {
    margin-top: 0;
  }

  a {
    display: inline-block;
    font-weight: 700;
    color: ${variables.colors.link};
  }
`;

const WarningClose = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 12;
  cursor: pointer;
  padding: 20px;
`;

export default DemoWarningPopup;
