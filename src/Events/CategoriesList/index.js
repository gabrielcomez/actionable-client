import React, { Component } from "react";
import { connect } from "react-redux";
import CategoriesList from "./CategoriesList";
import { showAllCategories } from "../../actions/events";

class CategoriesListContainer extends Component {
  componentDidMount() {
    console.log("this.props @CategoriesList comp", this.props);
  }
  render() {
    return <CategoriesList />;
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categoriess
  };
};

export default connect(mapStateToProps, { showAllCategories })(
  CategoriesListContainer
);
