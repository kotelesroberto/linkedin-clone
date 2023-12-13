/**
 *
 * Component: Interests
 * @desc This component is for showing the user's interests
 * @author Robert Koteles
 * @version 1.0.0
 */

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProfileCardBox from "./ProfileCardBox";
import "react-tabs/style/react-tabs.css";
import PeopleListTeaser from "../../Widgets/PeopleListTeaser";
import { peopleMayYouKnow, companiesMayYouKnow } from "../../../utils/demoData";

const ProfileCardInterests = (props) => {
  const isEditMode = props.iseditmode ? props.iseditmode : false;

  return (
    <ProfileCardBox title="Interests" panel="interests" iseditmode={isEditMode}>
      <Tabs className="modern">
        <TabList>
          <Tab>Top voices</Tab>
          <Tab>Companies</Tab>
          <Tab>Groups</Tab>
          <Tab>Schools</Tab>
        </TabList>

        <TabPanel>
          <PeopleListTeaser
            items={peopleMayYouKnow}
            columns="2"
          />
        </TabPanel>
        <TabPanel>
        <PeopleListTeaser
            items={companiesMayYouKnow}
            columns="2"
          />
        </TabPanel>
        <TabPanel>DEMO3</TabPanel>
        <TabPanel>DEMO4</TabPanel>
      </Tabs>
    </ProfileCardBox>
  );
};

export default ProfileCardInterests;
