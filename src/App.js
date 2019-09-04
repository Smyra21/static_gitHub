import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UserInfo from "./components/user-info/UserInfo";
import Work from "./components/work/Work";
import Overview from "./components/work/overview/Overview"

function App() {
  return (
    <div>
    <br />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <UserInfo />
          </div>
          <div className="col-sm-8">
            <Overview />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
