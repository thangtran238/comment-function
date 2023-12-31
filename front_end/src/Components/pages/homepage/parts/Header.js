import React, { Component } from "react";
import "../../../../Assets/style.css";
import UserIn from "./UserIn";
import { Link } from "react-router-dom"; 
class Header extends Component {
  render() {
    return (
      <header className="header-area">
        <div className="top-header-area">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-between">
              <div className="col-12 col-sm-4">
                <Link to="/" className="text-success pt-2">Welcome to Receipe World</Link>
              </div>
              <div className="col-12 col-sm-4">
                <div className="top-social-info text-right">
                  <a href="#">
                    <i className="fa-brands fa-pinterest"/>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-facebook"/>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-twitter"/>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-dribbble"/>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-behance"/>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-linkedin"/>
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-4">
                <UserIn />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
