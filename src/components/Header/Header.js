/**
 *
 * Component: Main Header
 * 2023, Robert Koteles
 */

import React from "react";
import styled from "styled-components";
import * as variables from "../Common/Variables";
import { connect } from "react-redux";
import { actionSignOutAPI } from "../../redux/actions/actions";

const Header = (props) => {
  const menuItems = [
    {
      image: "/images/nav-home.svg",
      title: "Home",
      url: "/home",
      notification: "0",
    },
    {
      image: "/images/nav-network.svg",
      title: "My Network",
      url: "#",
      notification: "0",
    },
    {
      image: "/images/nav-jobs.svg",
      title: "Jobs",
      url: "#",
      notification: "0",
    },
    {
      image: "/images/nav-messaging.svg",
      title: "Messaging",
      url: "#",
      notification: "0",
    },
    {
      image: "/images/nav-notifications.svg",
      title: "Notifications",
      url: "#",
      notification: "6",
    },
  ];
  const currentWindowLocationPath = window.location.pathname;

  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" alt="" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
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

            {!!menuItems.length &&
              menuItems.map((item, index) => (
                <NavList
                  className={
                    item.url == currentWindowLocationPath ? "active" : ""
                  }
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
              <a href="">
                {props.user && props.user.photoURL ? (
                  <img src={props.user.photoURL} alt={props.user.displayName} />
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

              <SignOut>
                <a href="#" onClick={props.signOut}>
                  Sign out
                </a>
              </SignOut>
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
    </Container>
  );
};

const Container = styled.div`
  background-color: ${variables.colors.white};
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
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
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;

  & > div {
    max-width: 280px;

    @media (max-width: 1024px) {
      max-width: 42px;
    }

    input {
      border: none;
      box-shadow: none;
      background-color: ${variables.colors.greyLight};
      border-radius: 2px;
      color: ${variables.colors.greyBolder};
      width: 218px;
      height: 34px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      border-color: ${variables.colors.greyBotticelli};
      vertical-align: middle;
      transition: all 0.3s;

      @media (max-width: 1024px) {
        display: none;
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
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
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

  &.active {
    &:after {
      border-bottom: 2px solid ${variables.colors.greyBolder};
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
      color: ${variables.colors.greyBold};

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
        color: ${variables.colors.greyBolder};
      }
    }
  }
`;

const NavListSearch = styled(NavList)`
  display: none;
  @media (max-width: 1024px) {
    display: block;
  }
`;

const NavListBadge = styled.strong`
  text-align: center;
  position: absolute;
  top: 2px;
  right: 18px;
  background-color: ${variables.colors.red};
  color: ${variables.colors.white};
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
  background: ${variables.colors.white};
  border-radius: 0 0 5px 5px;
  transition-duration: 167ms;
  text-align: left;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 6px 9px rgba(0, 0, 0, 0.2);
  max-height: calc(100vh - 64px);
  padding: 0;
  display: none;

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
    align-items: flex-start;
    padding: 0 12px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const User = styled(NavList)`
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

  &:hover {
    ${SignOut} {
      display: block;
    }
  }
`;

const ForBusiness = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
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
