import React, { Component } from "react";
import pic from "../../pic/Logo.png";
import "./Search.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Search extends Component {
  render() {
    let fontstyle = {
      color: "grey",
      size: "50px"
    };
    return (
      <div className="m-auto  simple-login-container">
        {!this.props.au ? <Redirect from="/search" to="/login" /> : null}
        <form>
          <img className="mb-3 rounded mx-auto d-block" src={pic} />
          <div className="row">
            <div className="col-md-12 form-group text-center mb-5">
              <h4 style={fontstyle}>Building Product Selection Platform</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <select className="browser-default custom-select ">
                <option defaultValue>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-8 input-group md-form form-sm form-2 pl-0">
              <input
                className="form-control my-0 py-1 red-border"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <div className=" input-group-append">
                <span
                  className="input-group-text red lighten-3"
                  id="basic-text1"
                >
                  <i className="fas fa-search"></i>
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    au: state.auth
  };
};
export default connect(mapStateToProps)(Search);
