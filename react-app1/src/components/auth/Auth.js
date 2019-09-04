import React, { Component } from "react";
import Navigatebar from "../../components/navigatebar/Navigatebar";
import Search from "../search/Search";
import Login from "../login/Login";
import { Switch, Route, Redirect } from "react-router-dom";
import "./Auth.css";
import { connect } from "react-redux";

class Auth extends Component {
  render() {
    return (
      <div className="background">
        <Navigatebar auth={this.props.au} />
        {console.log(this.props.au)}

        <div>
          <Switch>
            <Route path="/search" exact component={Search} />
            <Route path="/login" exact component={Login} />
            {this.props.au ? (
              <Redirect from="/" to="/search" />
            ) : (
              <Redirect from="/" to="/login" />
            )}
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    au: state.auth
  };
};

export default connect(mapStateToProps)(Auth);
