// src/js/components/List.jsx
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    articles: state.AddArticle.articles,
    forbidden: state.AddForbidden.forbidden
  };
};

const ArticleListView = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles !== undefined ? (
      articles.map(el => (
        <li className="list-group-item" key={el.id}>
          {el.title}
        </li>
      ))
    ) : (
      <br />
    )}
  </ul>
);

export const ArticleList = connect(mapStateToProps)(ArticleListView);

const ForbiddenListView = ({ forbidden }) => (
  <ul className="list-group list-group-flush">
    {forbidden !== undefined ? (
      forbidden.map(el => (
        <li className="list-group-item" key={el.id}>
          {el.title}
        </li>
      ))
    ) : (
      <br />
    )}
  </ul>
);

export const ForbiddenList = connect(mapStateToProps)(ForbiddenListView);
