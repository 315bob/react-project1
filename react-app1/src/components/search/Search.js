import React, { Component } from "react";
import pic from "../../pic/Logo.png";
import "./Search.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../../store/actions/package";

class Search extends Component {
  state = {
    form: {
      search: {
        elementConfig: {
          type: "text",
          placeholder: "Search...",
          className: "form-control my-0 py-1 red-border"
        },
        value: ""
      }
    }
  };

  componentDidMount() {
    this.props.getCategorys();
  }

  searchHandle = event => {
    event.preventDefault();
    console.log(this.props.categorys);
    this.props.categorys.map(category => {
      if (category.name == this.state.form.search.value) {
        this.props.search(category);
        this.props.history.push("/search/" + category.name);
      }
    });
  };

  changeHandle = event => {
    this.state.form.search.value = event.target.value;
  };

  render() {
    let fontstyle = {
      color: "grey",
      size: "50px"
    };

    return (
      <div className="m-auto  simple-login-container">
        {console.log(this.props.succeed)}
        {this.props.succeed === null ? (
          <Redirect from="/search" to="/login" />
        ) : null}
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
                <option defaultValue>Mechanical</option>
              </select>
            </div>
            <div className="col-8 input-group md-form form-sm form-2 pl-0">
              <input
                className={this.state.form.search.elementConfig.className}
                type={this.state.form.search.elementConfig.type}
                placeholder={this.state.form.search.elementConfig.placeholder}
                aria-label="Search"
                onChange={event => this.changeHandle(event)}
              />

              <div className=" input-group-append">
                <span
                  className="input-group-text red lighten-3"
                  id="basic-text1"
                >
                  <button
                    className="fas fa-search"
                    onClick={this.searchHandle}
                  ></button>
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
    succeed: state.login.succeed,
    categorys: state.search.categorys
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategorys: () => dispatch(actions.getCategorys()),
    search: category => dispatch(actions.search(category))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
