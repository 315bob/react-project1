import React, { Component } from "react";
import pic from "../../pic/Logo.png";
import { Link } from "react-router-dom";
import * as actions from "../../store/actions/package";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Spinner from "../spinner/Spinner";

class Signup extends Component {
  state = {
    loginForm: {
      username: {
        elementConfig: {
          type: "text",
          placeholder: "Username",
          className: "form-control"
        },
        validation: {
          required: true,
          minLength: 3,
          maxLength: 10
        },
        value: "",
        valid: false,
        touched: false
      },

      email: {
        elementConfig: {
          type: "text",
          placeholder: "Email",
          className: "form-control"
        },
        validation: {
          isEmail: true,
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
      },
      name: {
        elementConfig: {
          type: "text",
          placeholder: "Name",
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

  checkValidity(value, rules) {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
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
      updatedFormElement.elementConfig.className = updatedFormElement.elementConfig.className.concat(
        " Invalid"
      );
    } else {
      updatedFormElement.elementConfig.className = "form-control";
    }

    updatedFormElement.touched = true;
    updatedLoginrForm[index] = updatedFormElement;

    if (
      updatedFormElement.valid === false &&
      updatedFormElement.touched == true
    ) {
      updatedFormElement.elementConfig.className = updatedFormElement.elementConfig.className.concat(
        " Invalid"
      );
    } else {
      updatedFormElement.elementConfig.className = "form-control";
    }

    let formIsValid = true;

    for (let index in updatedLoginrForm) {
      formIsValid = updatedLoginrForm[index].valid && formIsValid;
    }

    this.setState({ loginForm: updatedLoginrForm, formIsValid: formIsValid });
  };

  signupHandle = () => {
    this.props.signup(
      this.state.loginForm.username.value,
      this.state.loginForm.email.value,
      this.state.loginForm.name.value,
      this.state.loginForm.password.value
    );
  };

  render() {
    let fontstyle = {
      color: "grey",
      size: "50px"
    };

    let error;
    if (this.props.error) {
      error = <div className="alert alert-warning mt-4">Email is used</div>;
    }

    let redirect;
    if (this.props.success) {
      redirect = <Redirect to="/" />;
    }

    let signupForm = (
      <form>
        <div className="row">
          <div className="col-md-12 form-group">
            {error}
            {redirect}
            <h4>username:</h4>
            <input
              type={this.state.loginForm.username.elementConfig.type}
              className={this.state.loginForm.username.elementConfig.className}
              placeholder={
                this.state.loginForm.username.elementConfig.placeholder
              }
              onChange={event => this.handleChange(event, "username")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 form-group">
            <h4>email:</h4>
            <input
              type={this.state.loginForm.email.elementConfig.type}
              placeholder={this.state.loginForm.email.elementConfig.placeholder}
              className={this.state.loginForm.email.elementConfig.className}
              onChange={event => this.handleChange(event, "email")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 form-group">
            <h4>name:</h4>
            <input
              type={this.state.loginForm.name.elementConfig.type}
              placeholder={this.state.loginForm.name.elementConfig.placeholder}
              className={this.state.loginForm.name.elementConfig.className}
              onChange={event => this.handleChange(event, "name")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 form-group">
            <h4>password:</h4>
            <input
              type={this.state.loginForm.password.elementConfig.type}
              placeholder={
                this.state.loginForm.password.elementConfig.placeholder
              }
              className={this.state.loginForm.password.elementConfig.className}
              onChange={event => this.handleChange(event, "password")}
            />
          </div>
        </div>
        <div className="row">
          <div className="mr-auto form-group ml-3">
            <Link to="/login">
              <button type="button" className="btn btn-primary ">
                Log in
              </button>
            </Link>
          </div>
          <div className="ml-auto form-group mr-3">
            <button
              type="button"
              disabled={!this.state.formIsValid}
              className="btn btn-primary "
              onClick={this.signupHandle}
            >
              Sign up
            </button>
          </div>
        </div>
      </form>
    );

    return (
      <div className="m-auto  simple-login-container">
        <img className="mb-3 rounded mx-auto d-block" src={pic} />
        <div className="row">
          <div className="col-md-12 form-group text-center mb-5">
            <h4 style={fontstyle}>Building Product Selection Platform</h4>
          </div>
        </div>
        {this.props.loading ? <Spinner /> : signupForm}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    success: state.signup.success,
    error: state.signup.error,
    loading: state.signup.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (username, email, name, password) =>
      dispatch(actions.signup(username, email, name, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
