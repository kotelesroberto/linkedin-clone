/**
 *
 * Widget: Recent Groups
 * 2023, Robert Koteles
 */

import React from "react";
import styled from "styled-components";
import * as variables from "../../_library/Variables";

import { Card, CardContainer } from "../../_library/Cards";
import { ListSmall, ListItemSmall } from "../../_library/Menus";
import DiscoverMore from "../../Widgets/DiscoverMore";

const WidgetJobMenu = () => {
  // TODO: fetch from API later, as JSON object
  const myJobsMenu = [
    {
      title: "My jobs",
      link: "/demo",
      icon: "/images/item-icon.svg",
    },
    {
      title: "Preferences",
      link: "/demo",
      icon: "/images/list-icon.svg",
    },
    {
      title: "Demnstrate skills",
      link: "/demo",
      icon: "/images/icon-thick.svg",
    },
  ];

  return (
    <Card>
      {!!myJobsMenu.length && (
        <CardContainer>
          <MyJobMenu id="group-recent">
            {myJobsMenu.map((item, index) => (
              <MyJobMenuItem key={"widget-recent-" + index}>
                <a href={item.link}>
                  <img src={item.icon} alt={item.title} />
                  {item.title}
                </a>
              </MyJobMenuItem>
            ))}
          </MyJobMenu>
        </CardContainer>
      )}

      <DiscoverMore
        title={["Discover more", "Hide"]}
        link="/demo"
        onclick={(e) => {}}
      />
    </Card>
  );
};

const MyJobMenu = styled(ListSmall)``;
const MyJobMenuItem = styled(ListItemSmall)`
  font-size: 14px;
  margin-bottom: 12px;

  img {
    width: 20px;
    height: auto;
    vertical-align: middle;
    margin-right: 8px;
  }
`;

export default WidgetJobMenu;
