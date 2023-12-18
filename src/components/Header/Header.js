/**
 *
 * Component: Main Header
 * 2023, Robert Koteles
 */

import React, { useState } from "react";
import styled from "styled-components";
import * as variables from "../_library/Variables";
import { connect } from "react-redux";
import { actionSignOutAPI } from "../../redux/actions/actions";

import ProfileCardUserPhoto from "../User/Panels/ProfileCardUserPhoto";

const Header = (props) => {
  const user = props.user;

  const [userMenuStatus, setUserMenuStatus] = useState(false);

  const onClickUserMenu = (e) => {
    e.preventDefault();
    setUserMenuStatus(!userMenuStatus);
  };

  const menuItemsHeader = [
    {
      image: "/images/nav-home.svg",
      title: "Home",
      url: "/home",
      notification: "0",
      class: "",
    },
    {
      image: "/images/nav-network.svg",
      title: "My Network",
      url: "/demo",
      notification: "0",
      class: "",
    },
    {
      image: "/images/nav-jobs.svg",
      title: "Jobs",
      url: "/jobs",
      notification: "1",
      class: "",
    },
    {
      image: "/images/nav-messaging.svg",
      title: "Messaging",
      url: "/demo",
      notification: "3",
      class: "mobile",
    },
    {
      image: "/images/nav-notifications.svg",
      title: "Notifications",
      url: "/demo",
      notification: "6",
      class: "",
    },
  ];

  const menuItemsFooter = [
    {
      image: "/images/nav-home.svg",
      title: "Home",
      url: "/home",
      notification: "0",
    },
    {
      image: "/images/nav-network.svg",
      title: "My Network",
      url: "/demo",
      notification: "0",
    },
    {
      image: "/images/icon-plus.svg",
      title: "Post",
      url: "/demo",
      notification: "0",
    },
    {
      image: "/images/nav-notifications.svg",
      title: "Notifications",
      url: "/demo",
      notification: "6",
    },
    {
      image: "/images/nav-jobs.svg",
      title: "Jobs",
      url: "/jobs",
      notification: "1",
    },
  ];

  const currentWindowLocationPath = window.location.pathname;

  return (
    <Container>
      <HeaderContainer>
        <Content>
          <Logo>
            <a href="/home">
              <img src="/images/home-logo.svg" alt="" />
            </a>
          </Logo>

          <Search>
            <div>
              <input type="text" placeholder="Search" id="pageSearch" />
            </div>
            <SearchIcon>
              <img src="/images/search-icon.svg" alt="Start search" />
            </SearchIcon>
          </Search>
          <Nav>
            <NavListWrap>
              <NavListSearch>
                <a>
                  <img src="/images/search-icon.svg" alt="" />
                  <span>Search</span>
                </a>
              </NavListSearch>

              {!!menuItemsHeader.length &&
                menuItemsHeader.map((item, index) => (
                  <NavList
                    className={`desktop ${item.class} ${
                      item.url == currentWindowLocationPath ? "active" : ""
                    }`}
                    key={`header-menu-item-${index}`}
                  >
                    <a href={item.url}>
                      <img src={item.image} alt={item.title} />
                      <span>{item.title}</span>
                      {item.notification > 0 && (
                        <NavListBadge>{item.notification}</NavListBadge>
                      )}
                    </a>
                  </NavList>
                ))}

              <User>
                <a href="#" onClick={(e) => onClickUserMenu(e)}>
                  {props.user && props.user.photoURL ? (
                    <img
                      src={props.user.photoURL}
                      alt={props.user.displayName}
                    />
                  ) : (
                    <img src="/images/avatar.svg" alt="User avatar" />
                  )}
                  <span>
                    Me
                    <img
                      src="/images/down-icon.svg"
                      alt="Open dropdown"
                      className="icon-arrow"
                    />
                  </span>
                </a>

                {userMenuStatus && (
                  <SignOut>
                    <a href="/">Home</a>
                    <a href="/jobs">Jobs</a>
                    <a href="https://www.linkedin.com/in/robertkoteles/">
                      Hire Robert Koteles, Senior Frontend Developer
                    </a>
                    <a href={`in/${user.shorturl}`}>Edit my profile</a>
                    <a href="#" onClick={props.signOut}>
                      Sign out
                    </a>
                  </SignOut>
                )}
              </User>
              <ForBusiness>
                <a>
                  <img src="/images/nav-work.svg" alt="" />
                  <span>
                    Business
                    <img
                      src="/images/down-icon.svg"
                      alt=""
                      className="icon-arrow"
                    />
                  </span>
                </a>
              </ForBusiness>
            </NavListWrap>
          </Nav>
        </Content>
      </HeaderContainer>
      <FooterContainer>
        <Content>
          <Nav className="footerNav">
            <NavListWrap>
              {!!menuItemsFooter.length &&
                menuItemsFooter.map((item, index) => (
                  <NavList
                    className={
                      item.url == currentWindowLocationPath ? "active" : ""
                    }
                    key={`header-menu-item-${index}`}
                  >
                    <a href={item.url}>
                      <img src={item.image} alt={item.title} />
                      <span>{item.title}</span>
                      {item.notification > 0 && (
                        <NavListBadge>{item.notification}</NavListBadge>
                      )}
                    </a>
                  </NavList>
                ))}
            </NavListWrap>
          </Nav>
        </Content>
      </FooterContainer>
    </Container>
  );
};

const Container = styled.div``;

const HeaderContainer = styled.div`
  background-color: ${variables.colorDefinitions.white};
  border-bottom: 1px solid ${variables.colors.border};
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1000;
`;

const FooterContainer = styled(HeaderContainer)`
  border-bottom: none;
  border-top: 1px solid ${variables.colors.border};
  top: initial;
  bottom: 0;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 52px;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;

  @media (max-width: 768px) {
    max-width: 576px;
    display: none;
  }
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;

  @media (max-width: 768px) {
    margin-left: 50px;
  }

  & > div {
    max-width: 280px;

    @media (max-width: 1024px) {
      max-width: 42px;
    }

    @media (max-width: 768px) {
      max-width: 100%;
    }

    input {
      border: none;
      box-shadow: none;
      background-color: ${variables.colors.headerInputBackground};
      border-radius: 2px;
      color: ${variables.colors.headerInputFont};
      width: 218px;
      height: 34px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      border-color: ${variables.colors.border};
      vertical-align: middle;
      transition: all 0.3s;

      @media (max-width: 1024px) {
        display: none;
      }

      @media (max-width: 768px) {
        display: block;
        width: 100%;
      }

      &:focus {
        font-size: 16px;
        padding-left: 50px;
        width: 100%;
      }
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;

  &.footerNav {
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  position: relative;

  &:after {
    content: "";
    display: block;
    transform: scaleX(0);
  }

  &.desktop {
    @media (max-width: 768px) {
      display: none;
    }
  }
  &.mobile {
    display: none;
    @media (max-width: 768px) {
      display: flex;
    }
  }

  &.active {
    &:after {
      border-bottom: 2px solid ${variables.colors.colorFont};
      content: "";
      bottom: 0;
      left: 0;
      position: absolute;
      transform: scaleX(1);
      transition: transform 0.2s ease-in-out;
      width: 100%;
      z-index: 10;
    }
  }

  a {
    min-height: 52px;
    min-width: 80px;
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    position: relative;
    text-decoration: none;
    cursor: pointer;

    img {
      opacity: 0.6;
      width: 24px;
      height: auto;

      &.icon-arrow {
        width: 16px;
      }
    }

    span {
      color: ${variables.colors.colorFont};

      @media (max-width: 768px) {
        display: none;
      }
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    a {
      img {
        opacity: 1;
      }
      span {
        color: ${variables.colors.colorFont};
      }
    }
  }
`;

const NavListSearch = styled(NavList)`
  display: none;
  @media (max-width: 1024px) {
    display: block;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavListBadge = styled.strong`
  text-align: center;
  position: absolute;
  top: 2px;
  right: 18px;
  background-color: ${variables.colors.badgeBackground};
  color: ${variables.colors.badgeFont};
  white-space: nowrap;
  height: 1.2rem;
  border-radius: 0.8rem;
  padding: 0 0.4rem;
  min-width: 0.8rem;
  font-size: 10px;
  line-height: 1.2rem;
`;

const SignOut = styled.div`
  width: 288px;
  min-height: 40px;
  position: absolute;
  top: 60px;
  left: auto;
  right: 0;
  background: ${variables.colorDefinitions.white};
  border-radius: 0 0 5px 5px;
  transition-duration: 167ms;
  text-align: left;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: ${variables.colors.boxShadow4};
  max-height: calc(100vh - 64px);
  padding: 0;
  z-index: 10000;
  padding: 12px 24px;

  @media (max-width: 768px) {
    left: 0;
    right: initial;
  }

  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: -10px;
    width: 100%;
    height: 10px;
  }

  a {
    font-size: 14px;
    line-height: 1.4em;
    align-items: flex-start;
    padding: 5px 0;
    margin: 0;
    min-height: initial;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const User = styled(NavList)`
  @media (max-width: 768px) {
    position: absolute;
    left: 12px;
  }

  a > svg,
  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;

    @media (max-width: 840px) {
      width: 22px;
      height: 22px;
    }
  }

  span {
    display: flex;
    align-items: center;
  }
`;

const ForBusiness = styled(User)`
  border-left: 1px solid ${variables.colors.border};

  @media (max-width: 768px) {
    display: none;
  }
`;

/*=====  React-redux related functions  ======*/

// any time the store is updated, mapStateToProps will be called. Expected to return an object
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: (e) => {
      e.preventDefault();
      dispatch(actionSignOutAPI());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
