import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";

import ChatList from "./ChatList";

const ChatContent = (props) => {
  const setChatsToOpen = props.setchatstoopen;
  const searchText = props.searchtext;

  return (
    <Container>
      <Tabs>
        <TabList>
          <Tab>Focused</Tab>
          <Tab>Other</Tab>
        </TabList>

        <TabPanel>
          <ChatList
            group="focused"
            tab="focused"
            setchatstoopen={setChatsToOpen}
            searchtext={searchText}
          />
        </TabPanel>
        <TabPanel>
          <ChatList
            group="other"
            tab="other"
            setchatstoopen={setChatsToOpen}
            searchtext={searchText}
          />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  transition: max-height 0.3s;
  max-height: 60vh;
  height: 100%;

  .closed & {
    max-height: 0;
  }
`;

export default ChatContent;
