/**
 *
 * Component: Mani Footer Menu
 * 2023, Robert Koteles
 */

import React from "react";
import styled from "styled-components";
import * as variables from "../Common/Variables";

const FooterMenu = () => {
  // TODO: fetch from API later, as JSON object
  const menuItemCols = [
    {
      category: "General",
      items: [
        {
          title: "Sign Up",
          link: "/signup",
        },
        {
          title: "Help Center",
          link: "/help/linkedin?lang=en",
        },
        {
          title: "About",
          link: "#https://about.linkedin.com",
        },
        {
          title: "Press",
          link: "https://press.linkedin.com",
        },
        {
          title: "Blog",
          link: "https://blog.linkedin.com",
        },
        {
          title: "Careers",
          link: "/company/linkedin/jobs",
        },
        {
          title: "Developers",
          link: "https://developer.linkedin.com",
        },
      ],
    },
    {
      category: "Browse LinkedIn",
      items: [
        {
          title: "Learning",
          link: "/learning",
        },
        {
          title: "Jobs",
          link: "/jobs",
        },
        {
          title: "Salary",
          link: "/salary",
        },
        {
          title: "Mobile",
          link: "https://mobile.linkedin.com",
        },
        {
          title: "Services",
          link: "/services",
        },
        {
          title: "Products",
          link: "/products",
        },
        {
          title: "Top Companies Hub",
          link: "/hubs/top-companies",
        },
      ],
    },
    {
      category: "Business Solutions",
      items: [
        {
          title: "Talent",
          link: "https://business.linkedin.com/talent-solutions",
        },
        {
          title: "Marketing",
          link: "https://business.linkedin.com/marketing-solutions",
        },
        {
          title: "Sales",
          link: "https://business.linkedin.com/sales-solutions",
        },
        {
          title: "Learning",
          link: "https://learning.linkedin.com",
        },
      ],
    },
    {
      category: "Directories",
      items: [
        {
          title: "Members",
          link: "/directory/people",
        },
        {
          title: "Jobs",
          link: "/directory/jobs",
        },
        {
          title: "Companies",
          link: "/directory/companies",
        },
        {
          title: "Featured",
          link: "/directory/featured",
        },
        {
          title: "Learning",
          link: "/directory/learning",
        },
        {
          title: "Posts",
          link: "/directory/posts",
        },
        {
          title: "Articles",
          link: "/directory/articles",
        },
        {
          title: "Schools",
          link: "/directory/schools",
        },
        {
          title: "News",
          link: "/directory/news",
        },
        {
          title: "News Letters",
          link: "/directory/newsletters",
        },
        {
          title: "Services",
          link: "/directory/services",
        },
        {
          title: "Products",
          link: "/directory/products",
        },
        {
          title: "Advice",
          link: "/directory/advice",
        },
        {
          title: "People Search",
          link: "/directory/people-search",
        },
      ],
    },
  ];

  return (
    <FooterMenuSection>
      <FooterMenuColumns>
        <FooterMenuColumn>
          <a href="/">
            <img src="/images/login-logo.svg" alt="Go to LinkedIn homepage" />
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
    background-color: ${variables.colors.grey};
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
