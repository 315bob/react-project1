import React, { Component } from "react";
import Navigatebar from "../../components/navigatebar/Navigatebar";
import Search from "../search/Search";
import Login from "../login/Login";
import { Switch, Route, Redirect } from "react-router-dom";
import "./Auth.css";
import { connect } from "react-redux";
import Signup from "../signup/Signup";
import Products from "../products/Products";
import * as actions from "../../store/actions/package";
import Detail from "../products/detail/Detail";

class Auth extends Component {
  componentWillMount() {
    console.log("mounting");
    this.props.autoLogin();
  }

  render() {
    return (
      <div className="background">
        <Navigatebar auth={this.props.succeed} />

        <div>
          {console.log(this.props.succeed)}
          {this.props.succeed !== null ? (
            <Switch>
              <Route path="/search" exact component={Search} />

              <Route path="/search/:category" exact component={Products} />
              <Route path={"/search/:category/:id"} exact component={Detail} />
              <Redirect from="/" to="/search" />
            </Switch>
          ) : (
            <Switch>
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={Signup} />
              <Redirect from="/" to="/login" />
            </Switch>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    succeed: state.login.succeed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout()),
    autoLogin: () => dispatch(actions.autoLogin())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
