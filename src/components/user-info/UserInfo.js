import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import User from "../../assests/userImage/user-image.jpg";
import './UserInfo.css';
import { Button } from "react-bootstrap";
import UserIcon from "../../assests/icons/user.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";


export default class UserInfo extends Component {
    render() {
        return (
          <div className="container-fluid">
            <div></div>
            <div className="row">
              <div className="col-sm-6">
                <img src={User} />
                <p>
                  <b className="fullName">Supreet Singh</b>
                  <br />
                  supreetsingh247
                  <br />
                  <br />
                  <Button variant="outline-secondary" className="button">
                    <b className="buttonText">Follow</b>
                  </Button>
                  <br />
                  Front end developer since 1.5 years
                  <br />
                  <img src={UserIcon} /> Target Corporation
                  <br />
                  India
                  <br />
                  supreetsingh.247@gmail.com
                  <br />
                  <br />
                  Block or report user
                </p>
              </div>

              <div className="col-sm-6"></div>
            </div>
          </div>
        );
    }
}
