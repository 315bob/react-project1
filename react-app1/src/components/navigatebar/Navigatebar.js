import React from "react";
import "./Navigatebar.css";
import porfile from "../../pic/jay.jpg";

export default function Navigatebar(props) {
  let fontstyle = {
    color: "grey",
    size: "50px"
  };
  console.log(props);
  let element = null;
  if (props.auth === false) {
    element = (
      <div>
        <nav className="navbar  nav text-right">
          <div className="ml-auto">
            <h4>
              <a style={fontstyle}>Sign up</a>
            </h4>
          </div>
        </nav>
      </div>
    );
  } else {
    element = (
      <div>
        <nav className="navbar  nav text-right">
          <div className="ml-auto">
            <h4>
              <a className="mr-2" style={fontstyle}>
                Project
              </a>
              <img src={porfile} id="jay" />
            </h4>
          </div>
        </nav>
      </div>
    );
  }

  return element;
}
