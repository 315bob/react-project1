import React, { Component } from "react";
import pic from "../../pic/Logo.png";
import "./Login.css";
import { Link } from "react-router-dom";
import * as actionType from "../../store/actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
class Login extends Component {
  state = {
    loginForm: {
      username: {
        elementConfig: {
          type: "text",
          placeholder: "Username or Email",
          className: "form-control"
        },
        validation: {
          required: true
        },
        value: "",
        valid: false,
        touched: false
      },
      password: {
        elementConfig: {
          type: "password",
          placeholder: "Password",
          className: "form-control"
        },
        validation: {
          required: true
        },
        value: "",
        valid: false,
        touched: false
      }
    },
    formIsValid: false
  };

  loginHandle = () => {
    this.props.login(
      this.state.loginForm.username.value,
      this.state.loginForm.username.valid
    );
  };

  checkValidity(value, rules) {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    return isValid;
  }

  handleChange = (event, index) => {
    const updatedLoginrForm = {
      ...this.state.loginForm
    };

    const updatedFormElement = {
      ...updatedLoginrForm[index]
    };

    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );

    if (updatedFormElement.valid === false) {
      console.log(updatedFormElement);
      updatedFormElement.elementConfig.className = updatedFormElement.elementConfig.className.concat(
        " Invalid"
      );
    } else {
      updatedFormElement.elementConfig.className = "form-control";
    }

    updatedFormElement.touched = true;
    updatedLoginrForm[index] = updatedFormElement;

    let formIsValid = true;

    for (let index in updatedLoginrForm) {
      formIsValid = updatedLoginrForm[index].valid && formIsValid;
    }

    this.setState({ loginForm: updatedLoginrForm, formIsValid: formIsValid });
  };

  render() {
    let fontstyle = {
      color: "grey",
      size: "50px"
    };

    // changStatus = () => {

    // };

    return (
      <div className="m-auto  simple-login-container">
        {this.props.au ? <Redirect from="/login" to="/search" /> : null}

        <img className="mb-3 rounded mx-auto d-block" src={pic} />
        <div className="row">
          <div className="col-md-12 form-group text-center mb-5">
            <h4 style={fontstyle}>Building Product Selection Platform</h4>
          </div>
        </div>
        <form>
          <div className="row">
            <div className="col-md-12 form-group">
              <input
                type={this.state.loginForm.username.elementConfig.type}
                className={
                  this.state.loginForm.username.elementConfig.className
                }
                placeholder={
                  this.state.loginForm.username.elementConfig.placeholder
                }
                onChange={event => this.handleChange(event, "username")}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 form-group">
              <input
                type={this.state.loginForm.password.elementConfig.type}
                placeholder={
                  this.state.loginForm.password.elementConfig.placeholder
                }
                className={
                  this.state.loginForm.password.elementConfig.className
                }
                onChange={event => this.handleChange(event, "password")}
              />
            </div>
          </div>
          <div className="row">
            <div className="ml-auto form-group mr-3">
              <button
                onClick={this.loginHandle}
                disabled={!this.state.formIsValid}
                type="button"
                className="btn btn-primary "
              >
                Log in
              </button>
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

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) =>
      dispatch({
        type: actionType.LOGIN,
        loginData: { username: username, password: password }
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
