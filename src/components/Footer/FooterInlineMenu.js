import React from "react";
import styled from "styled-components";
import * as variables from "../Common/Variables";

const FooterInlineMenu = (props) => {
  const variation = props.logoVariation ?? "";

  return (
    <FooterInlineMenuSection>
      <FooterInlineMenuColumns>
        <FooterInlineMenuColumn>
          <ul className={props.extraClass}>
            <li>
              <a href="/">
                <img
                  src={`/images/footer-logo${variation}.svg`}
                  alt="Go to LinkedIn homepage"
                />
                {props.extraClass && <span>LinkedIn Corporation © 2023</span>}
                {!props.extraClass && <span>© 2023</span>}
              </a>
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
  position: sticky;
  top: 76px;

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

    &.logo-last {
      justify-content: center;
      margin-top: -22px;
      padding: 0 24px;

      @media (max-width: 768px) {
        padding: 0;
      }

      li {
        margin: 0.4rem 0;

        @media (max-width: 768px) {
          width: auto;
        }

        &:first-child {
          width: 100%;
          order: 2;
        }
      }
    }

    li {
      @media (max-width: 768px) {
        width: 50%;
      }

      a {
        padding: 0 8px;
        font-size: 12px;
        display: inline-flex;
        vertical-align: middle;
      }

      span {
        color: rgba(0, 0, 0, 0.9);
        margin-left: 8px;
      }
    }
  }
`;

export default FooterInlineMenu;
