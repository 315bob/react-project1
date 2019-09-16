import React, { Component } from "react";
import SideBar from "./sideBar/SideBar";
import Product from "./product/Product";
import { connect } from "react-redux";
import "./Products.css";

class Products extends Component {
  state = {
    products: []
  };

  render() {
    let products = this.props.category.products.map(product => {
      return (
        <Product
          detail={product}
          key={product.id}
          history={this.props.history}
          match={this.props.match}
        />
      );
    });

    return (
      <div className="new-bg">
        <div className="row">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9">
            <div>
              <span className="active-breadcrum">
                Mechanical <span className="mx-2">></span>{" "}
              </span>
              {console.log(this.props.category.products[0].id)}
              {this.props.category.name}
            </div>
            <div className="flex-container">{products}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    category: state.search.category
  };
};
export default connect(mapStateToProps)(Products);
