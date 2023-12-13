/**
 *
 * Widget: Recent Groups
 * 2023, Robert Koteles
 */

import React from "react";

import { Card, CardContainer } from "../../_library/Cards";
import {
  ListSmallHeader,
  ListSmall,
  ListItemSmall,
  ListSmallIcon_Group,
  ListSmallIcon_Plus_After,
} from "../../_library/Menus";
import DiscoverMore from "../../Widgets/DiscoverMore";
import { groupRecent } from "../../../utils/demoData";

const WidgetRecent = () => {
  const groupGroups = groupRecent;

  return (
    <Card>
      {!!groupRecent.length && (
        <CardContainer>
          <ListSmallHeader>Recent</ListSmallHeader>
          <ListSmall id="group-recent">
            {groupRecent.map((item, index) => (
              <ListItemSmall key={"widget-recent-" + index}>
                <a href={item.link}>
                  <ListSmallIcon_Group></ListSmallIcon_Group>
                  {item.title}
                </a>
              </ListItemSmall>
            ))}
          </ListSmall>
        </CardContainer>
      )}

      {!!groupGroups.length && (
        <CardContainer>
          <ListSmallHeader>
            <a href="#">Groups</a>
          </ListSmallHeader>

          <ListSmall id="group-recent">
            {groupGroups.map((item, index) => (
              <ListItemSmall key={"widget-group-" + index}>
                <a href={item.link}>
                  <ListSmallIcon_Group></ListSmallIcon_Group>
                  {item.title}
                </a>
              </ListItemSmall>
            ))}
          </ListSmall>
        </CardContainer>
      )}

      <CardContainer>
        <ListSmallHeader>
          <a href="/demo">Events</a>
          <ListSmallIcon_Plus_After></ListSmallIcon_Plus_After>
        </ListSmallHeader>
      </CardContainer>
      <CardContainer>
        <ListSmallHeader>
          <a href="/demo">Followed Hashtags</a>
        </ListSmallHeader>
      </CardContainer>
      <DiscoverMore
        title={["Discover more", "Hide"]}
        link="/demo"
        onclick={(e) => {}}
      />
    </Card>
  );
};

export default WidgetRecent;
