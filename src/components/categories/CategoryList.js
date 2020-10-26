import React, { Component } from "react";
import { connect } from "react-redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as movieActions from "../../redux/actions/movieActions";
class CategoryList extends Component {
  componentDidMount() {
    this.props.getCategories();
  }
  selectCategory = (category) => {
    this.props.changeCategory(category);
    this.props.getMovies(category.id);
  };
  render() {
    return (
      <div>
        <h4>
          Categories {" "}
          <span className="badge badge-dark">
            {this.props.currentCategory.categoryName}
          </span>
        </h4>
        <ul className="list-group ">
          {this.props.categories.map((category) => (
            <li
              key={category.id}
              onClick={() => this.selectCategory(category)}
              className="bg-dark list-group-item d-flex   text-light justify-content-between align-items-center "
            >
              {category.categoryName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}

const mapDispatchToProps= {
      getCategories:  categoryActions.getCategories,
      changeCategory: categoryActions.changeCategory,
      getMovies : movieActions.getMovies
}



export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
