import React from "react";
import styled from "styled-components";
import * as variables from "../Common/Variables";

const FooterInlineMenu = (props) => {
  const variation = props.logoVariation ?? "";

  // TODO: fetch from API later, as JSON object
  const menuItems = [
    {
      title: "About",
      link: "#",
    },
    {
      title: "Accesibility",
      link: "#",
    },
    {
      title: "User Agreement",
      link: "#",
    },
    {
      title: "Privacy Policy",
      link: "#",
    },
    {
      title: "Cookie Policy",
      link: "#",
    },
    {
      title: "Copyright Policy",
      link: "#",
    },
    {
      title: "Brand Policy",
      link: "#",
    },
    {
      title: "Guest Controls",
      link: "#",
    },
    {
      title: "Community Guidelines",
      link: "#",
    },
    {
      title: "Language",
      link: "#",
    },
  ];

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

            {menuItems.map((item, index) => (
              <li key={"footer-inline-menu-" + index}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
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
