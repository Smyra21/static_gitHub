import React, { Component } from "react";
import { Tabs } from "@yazanaabed/react-tabs";
import Overview from "../work/overview/Overview";
export default class Work extends Component {
  render() {
    return (
      <div>
        <Tabs
          activeTab={{
            id: "tab1"
          }}
        >
          <Tabs.Tab id="tab1" title="Overview">
            <div style={{ padding: 5 }}>{Overview}</div>
          </Tabs.Tab>
          {/* <Tabs.Tab disabled title="Repositories">
            <div style={{ padding: 5 }}></div>
          </Tabs.Tab>
          <Tabs.Tab disabled title="Projects">
            <div style={{ padding: 5 }}></div>
          </Tabs.Tab>
          <Tabs.Tab disabled title="Followers">
            <div style={{ padding: 5 }}></div>
          </Tabs.Tab>
          <Tabs.Tab  title="Followers">
            <div style={{ padding: 5 }}></div>
          </Tabs.Tab>
          <Tabs.Tab disabled title="Followers">
            <div style={{ padding: 5 }}></div>
          </Tabs.Tab> */}
        </Tabs>{" "}
      </div>
    );
  }
}
