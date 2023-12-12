/**
 *
 * Component: Mani Footer Menu
 * 2023, Robert Koteles
 */

import React from "react";
import styled from "styled-components";
import * as variables from "../_library/Variables";

const FooterMenu = () => {
  // TODO: fetch from API later, as JSON object
  const menuItemCols = [
    {
      category: "General",
      items: [
        {
          link: "https://www.svgrepo.com/",
          title: "SVG: svgrepo.com",
        },
        {
          link: "https://www.manypixels.co/gallery",
          title: "SVG: ManyPixels.co",
        },
        {
          link: "/demo",
          title: "Sign Up",
        },
        {
          link: "/demo",
          title: "Help Center",
        },
        {
          link: "/demo",
          title: "About",
        },
        {
          link: "/demo",
          title: "Press",
        },
        {
          link: "/demo",
          title: "Blog",
        },
        {
          link: "/demo",
          title: "Careers",
        },
        {
          link: "/demo",
          title: "Developers",
        },
      ],
    },
    {
      category: "Browse RuleX",
      items: [
        {
          link: "/demo",
          title: "Learning",
        },
        {
          link: "/demo",
          title: "Jobs",
        },
        {
          link: "/demo",
          title: "Salary",
        },
        {
          link: "/demo",
          title: "Mobile",
        },
        {
          link: "/demo",
          title: "Services",
        },
        {
          link: "/demo",
          title: "Products",
        },
        {
          link: "/demo",
          title: "Top Companies Hub",
        },
      ],
    },
    {
      category: "Business Solutions",
      items: [
        {
          link: "/demo",
          title: "Talent",
        },
        {
          link: "/demo",
          title: "Marketing",
        },
        {
          link: "/demo",
          title: "Sales",
        },
        {
          link: "/demo",
          title: "Learning",
        },
      ],
    },
    {
      category: "Directories",
      items: [
        {
          link: "/demo",
          title: "Members",
        },
        {
          link: "/demo",
          title: "Jobs",
        },
        {
          link: "/demo",
          title: "Companies",
        },
        {
          link: "/demo",
          title: "Featured",
        },
        {
          link: "/demo",
          title: "Learning",
        },
        {
          link: "/demo",
          title: "Posts",
        },
        {
          link: "/demo",
          title: "Articles",
        },
        {
          link: "/demo",
          title: "Schools",
        },
        {
          link: "/demo",
          title: "News",
        },
        {
          link: "/demo",
          title: "News Letters",
        },
        {
          link: "/demo",
          title: "Services",
        },
        {
          link: "/demo",
          title: "Products",
        },
        {
          link: "/demo",
          title: "Advice",
        },
        {
          link: "/demo",
          title: "People Search",
        },
      ],
    },
  ];

  return (
    <FooterMenuSection>
      <FooterMenuColumns>
        <FooterMenuColumn>
          <a href="/">
            <img src="/images/login-logo.svg" alt="Go to LinkedX homepage" />
          </a>
        </FooterMenuColumn>

        {menuItemCols.map((catItem, catIndex) => (
          <FooterMenuColumn key={"footer-cat-menu-" + catIndex}>
            <h3>{catItem.category}</h3>
            <ul>
              {catItem.items.map((menuItem, menuIndex) => (
                <li key={"footer-cat-menu-item-" + menuIndex}>
                  <a href={menuItem.link}>{menuItem.title}</a>
                </li>
              ))}
            </ul>
          </FooterMenuColumn>
        ))}
      </FooterMenuColumns>
    </FooterMenuSection>
  );
};

const FooterMenuSection = styled.section`
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 100vw;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: ${variables.colors.footerMenuRowBackground};
    z-index: -1;
  }
`;

const FooterMenuColumns = styled.div`
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

const FooterMenuColumn = styled.div`
  width: 20%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 24px;
  }

  h3 {
    font-size: 16px;
    line-height: 1em;
    margin-bottom: 8px;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    a {
    }
  }
`;

export default FooterMenu;
