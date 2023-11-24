import React from "react";
import styled from "styled-components";
import * as variables from '../Common/Variables';

const FooterInlineMenu = () => {
  return (
    <FooterInlineMenuSection>
      <FooterInlineMenuColumns>
        <FooterInlineMenuColumn>
          <ul>
            <li>
              <a href="/">
                <img
                  src="/images/footer-logo.svg"
                  alt="Go to LinkedIn homepage"
                />
              </a>
            </li>
            <li>
              <a href="#">© 2023</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Accesibility</a>
            </li>
            <li>
              <a href="#">User Agreement</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
            <li>
              <a href="#">Copyright Policy</a>
            </li>
            <li>
              <a href="#">Brand Policy</a>
            </li>
            <li>
              <a href="#">Guest Controls</a>
            </li>
            <li>
              <a href="#">Community Guidelines</a>
            </li>
            <li>
              <a href="#">Language</a>
            </li>
          </ul>
        </FooterInlineMenuColumn>
      </FooterInlineMenuColumns>
    </FooterInlineMenuSection>
  );
};

const FooterInlineMenuSection = styled.section`
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 100vw;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: ${variables.colors.grey};
    z-index: -1;
  }
`;

const FooterInlineMenuColumns = styled.div`
  width: 100%;
  max-width: 1128px;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 22px 0;

  @media (max-width: 768px) {
    padding: 22px 16px;
    flex-direction: column;
  }
`;

const FooterInlineMenuColumn = styled.div`
  ul {
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  li {
    @media (max-width: 768px) {
      width: 50%;
    }

    a {
      padding: 0 8px;
      font-size: 12px;
    }
  }
`;

export default FooterInlineMenu;
