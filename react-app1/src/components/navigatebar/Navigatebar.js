import React, { Component } from "react";
import "./Navigatebar.css";
import porfile from "../../pic/jay.jpg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import pic from "../../pic/Logo.png";

class Navigatebar extends Component {
  render() {
    let fontstyle = {
      color: "grey",
      size: "50px"
    };

    let element = null;
    let logo;
    let searchBar;
    if (this.props.succeed) {
      logo = (
        <div>
          <img className="mb-3 rounded mx-auto d-block" src={pic} />
        </div>
      );
      searchBar = <div></div>;
    }

    if (this.props.succeed === false) {
      element = (
        <div>
          <nav className="navbar  nav text-right">
            <div className="ml-auto">
              <h4>
                <Link to="/signup">
                  <h3 style={fontstyle}>Sign up </h3>
                </Link>
              </h4>
            </div>
          </nav>
        </div>
      );
    } else {
      element = (
        <div>
          <nav className="navbar  nav text-right">
            {logo}
            {searchBar}
            <div className="ml-auto">
              <h4>
                <a className="mr-2" style={fontstyle}>
                  Project
                </a>
                <img className="rounded-circle" src={porfile} id="jay" />
              </h4>
            </div>
          </nav>
        </div>
      );
    }

    return element;
  }
}

const mapStateToProps = state => {
  return {
    succeed: state.search.succeed
  };
};

export default connect(mapStateToProps)(Navigatebar);
