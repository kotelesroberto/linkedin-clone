/**
 *
 * Component: Activity
 * @desc This component is for showing the user's activity
 * @author Robert Koteles
 * @version 1.0.0
 */

import React, { useState, useRef } from "react";
import ProfileCardBox from "./ProfileCardBox";
import ContentListItems from "../Panels/ContentListItems";
import { activity } from "../../../utils/demoData";
import DiscoverMore from "../../Widgets/DiscoverMore";
import styled from "styled-components";
import Moment from "react-moment";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ProfileCardActivity = (props) => {
  const isEditMode = props.iseditmode ? props.iseditmode : false;
  const [openedStatus, setOpenedStatus] = useState("closed");
  const thisListRef = useRef();
  const maxItemsToShow = 2;

  const extraButton = (
    <DiscoverMore
      title={["Show all", "Hide"]}
      link="#"
      onclick={(e) => toggleView(e)}
    />
  );

  const toggleView = (e) => {
    e.preventDefault();

    setOpenedStatus(openedStatus === "closed" ? "open" : "closed");
    thisListRef.current.querySelectorAll("& > li").forEach((item, index) => {
      if (index >= maxItemsToShow) {
        item.classList.toggle("closed");
      }
    });
  };

  const createAssociated = (item) => {
    return (
      <Associated>
        <img src={item.icon} alt={item.name} />
        <span>{item.name}</span>
      </Associated>
    );
  };

  let activityItems = [];

  activity.map((activityItem) => {
    let userActivityItem = {};

    const timeinfo = (
      <Moment fromNow ago>
        {new Date(activityItem.timestamp)}
      </Moment>
    );
    console.log(timeinfo);

    // date when user worked here
    userActivityItem.title5 = `XXX ${activityItem.type} · ${timeinfo}`;
    userActivityItem.content = createAssociated({
      name: activityItem.imagetext,
      icon: activityItem.image,
    });
    userActivityItem.content2 = activityItem.content;
    activityItems.push(userActivityItem);
  });

  console.log({ activityItems });

  const content = (
    <>
      <Tabs className="modern">
        <TabList>
          <Tab>Posts</Tab>
          <Tab>Comments</Tab>
          <Tab>Videos</Tab>
          <Tab>Images</Tab>
        </TabList>

        <TabPanel>
          {activity.length && (
            <ContentListItems
              items={activityItems}
              parentRef={thisListRef}
              maxItemsToShow={maxItemsToShow}
            />
          )}
        </TabPanel>
        <TabPanel>DEMO2</TabPanel>
        <TabPanel>DEMO3</TabPanel>
        <TabPanel>DEMO4</TabPanel>
      </Tabs>

      {extraButton}
    </>
  );

  return (
    <>
      <ProfileCardBox
        title="Activity"
        content={content}
        panel="activity"
        iseditmode={isEditMode}
      ></ProfileCardBox>
    </>
  );
};

const Associated = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;

  img {
    width: 24px;
    height: auto;
    margin-right: 12px;
  }

  span {
    font-size: 14px;
  }
`;

export default ProfileCardActivity;
