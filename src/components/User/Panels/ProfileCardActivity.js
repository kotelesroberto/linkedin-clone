/**
 *
 * Component: Activity
 * @desc This component is for showing the user's activity
 * @author Robert Koteles
 * @version 1.0.0
 */

import React from "react";
import ProfileCardBox from "./ProfileCardBox";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ProfileCardActivity = (props) => {
  const profileUid = props.profileuid;
  const isEditMode = props.iseditmode ? props.iseditmode : false;

  const content = (
    <Tabs className="modern">
      <TabList>
        <Tab>Posts</Tab>
        <Tab>Comments</Tab>
        <Tab>Videos</Tab>
        <Tab>Images</Tab>
      </TabList>

      <TabPanel>DEMO1</TabPanel>
      <TabPanel>DEMO2</TabPanel>
      <TabPanel>DEMO3</TabPanel>
      <TabPanel>DEMO4</TabPanel>
    </Tabs>
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

export default ProfileCardActivity;
