import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterSection>
      <FooterColumns>
        <FooterColumn>
          <a href="/">
            <img src="/images/login-logo.svg" alt="Go to LinkedIn homepage" />
          </a>
        </FooterColumn>
        <FooterColumn>
          <h3>General</h3>
          <ul>
            <li>
              <a href="/signup">Sign Up</a>
            </li>
            <li>
              <a href="/help/linkedin?lang=en">Help Center</a>
            </li>
            <li>
              <a href="https://about.linkedin.com">About</a>
            </li>
            <li>
              <a href="https://press.linkedin.com">Press</a>
            </li>
            <li>
              <a href="https://blog.linkedin.com">Blog</a>
            </li>
            <li>
              <a href="/company/linkedin/jobs">Careers</a>
            </li>
            <li>
              <a href="https://developer.linkedin.com">Developers</a>
            </li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <h3>Browse LinkedIn</h3>
          <ul>
            <li>
              <a href="/learning">Learning</a>
            </li>
            <li>
              <a href="/jobs">Jobs</a>
            </li>
            <li>
              <a href="/salary">Salary</a>
            </li>
            <li>
              <a href="https://mobile.linkedin.com">Mobile</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/hubs/top-companies">Top Companies Hub</a>
            </li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <h3>Business Solutions</h3>
          <ul>
            <li>
              <a href="https://business.linkedin.com/talent-solutions">
                Talent
              </a>
            </li>
            <li>
              <a href="https://business.linkedin.com/marketing-solutions">
                Marketing
              </a>
            </li>
            <li>
              <a href="https://business.linkedin.com/sales-solutions">Sales</a>
            </li>
            <li>
              <a href="https://learning.linkedin.com">Learning</a>
            </li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <h3>Directories</h3>
          <ul>
            <li>
              <a href="/directory/people">Members</a>
            </li>
            <li>
              <a href="/directory/jobs">Jobs</a>
            </li>
            <li>
              <a href="/directory/companies">Companies</a>
            </li>
            <li>
              <a href="/directory/featured">Featured</a>
            </li>
            <li>
              <a
                href="/directory/learning"
                data-tracking-control-name="homepage-basic_directory_learningDirectoryUrl"
                data-tracking-will-navigate=""
              >
                Learning
              </a>
            </li>
            <li>
              <a href="/directory/posts">Posts</a>
            </li>
            <li>
              <a href="/directory/articles">Articles</a>
            </li>
            <li>
              <a href="/directory/schools">Schools</a>
            </li>
            <li>
              <a href="/directory/news">News</a>
            </li>
            <li>
              <a href="/directory/newsletters">News Letters</a>
            </li>
            <li>
              <a href="/directory/services">Services</a>
            </li>
            <li>
              <a href="/directory/products">Products</a>
            </li>
            <li>
              <a href="/directory/advice">Advice</a>
            </li>
            <li>
              <a href="/directory/people-search">People Search</a>
            </li>
          </ul>
        </FooterColumn>
      </FooterColumns>
    </FooterSection>
  );
};

const FooterSection = styled.section`
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 100vw;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: #f3f2f0;
    z-index: -1;
  }
`;

const FooterColumns = styled.div`
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

const FooterColumn = styled.div`
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

export default Footer;
