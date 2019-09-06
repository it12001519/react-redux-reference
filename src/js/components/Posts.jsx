import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";
export class Post extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.articles !== undefined ? (
          this.props.articles.map(el => (
            <li className="list-group-item" key={el.id}>
              {el.title}
            </li>
          ))
        ) : (
          <br />
        )}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.AddArticle.remoteArticles.slice(0, 5)
  };
}

export default connect(
  mapStateToProps,
  { getData }
)(Post);
