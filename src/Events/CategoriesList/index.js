import React, { Component } from "react";
import { connect } from "react-redux";
import CategoriesList from "./CategoriesList";
import { showAllCategories } from "../../actions/events";

class CategoriesListContainer extends Component {
  componentDidMount() {
    console.log("this.props @CategoriesList comp", this.props);
    this.props.showAllCategories();
  }
  render() {
    return <CategoriesList />;
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

export default connect(mapStateToProps, { showAllCategories })(
  CategoriesListContainer
);

// categories={this.pros.categories}
