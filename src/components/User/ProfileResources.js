import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as variables from "../Common/Variables";
import DiscoverMore from "../Widgets/DiscoverMore";

import { Card } from "../Common/Cards";

const ProfileResources = () => {
  const navigate = useNavigate();

  const doDemo = (e) => {
    e.preventDefault();
    navigate("/demo");
  };
  return (
    <Container>
      <CardTop>
        <h2>Resources</h2>
        <span>
          <img src="/images/icon-eye.svg" alt="Private" />
          Private to you
        </span>
      </CardTop>
      <CardContent>
        <Resources>
          <Resource>
            <img src="/images/icon-mercado.svg" alt="" />
            <div>
              <h3>Creator mode Off</h3>
              <p>
                Get discovered, showcase content on your profile, and get access
                to creator toolsGet discovered, showcase content on your
                profile, and get access to creator tools
              </p>
            </div>
          </Resource>
          <Resource>
            <img src="/images/icon-people.svg" alt="" />
            <div>
              <h3>My network</h3>
              <p>See and manage your connections and interests.</p>
            </div>
          </Resource>
        </Resources>
      </CardContent>

      <DiscoverMore
        title={["Show all resources", "Show all resources"]}
        link="#"
        onclick={(e) => doDemo(e)}
      />
    </Container>
  );
};

const Container = styled(Card)`
  color: ${variables.colors.greyBolder};
`;
const CardTop = styled.div`
  padding: 0 24px;

  h2 {
    font-siz20pxe: ;
  }
  span {
    font-size: 14px;
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      margin-right: 4px;
    }
  }
`;
const CardContent = styled.div``;

const Resources = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  padding: 12px 24px;
`;

const Resource = styled.li`
  color: ${variables.colors.greyBolder};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  border-bottom: 1px solid ${variables.colors.grey};
  padding: 12px 0;

  &:last-child {
    border: none;
  }

  h3 {
    font-size: 16px;
  }
  p {
    font-size: 14px;
    margin: 0;
  }
  img {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }
`;

export default ProfileResources;
