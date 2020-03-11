import React, { Component } from "react";
import { connect } from "react-redux";
import CategoriesList from "./CategoriesList";
import { showAllCategories } from "../../actions/category";

class CategoriesListContainer extends Component {
  componentDidMount() {
    console.log("this.props @CategoriesList comp", this.props);
    this.props.showAllCategories();
  }
  render() {
    return <CategoriesList category={this.props.category} />;
  }
}

const mapStateToProps = state => {
  return {
    category: state.category
  };
};

export default connect(mapStateToProps, { showAllCategories })(
  CategoriesListContainer
);
