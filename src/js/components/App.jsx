import React from "react";
import { ArticleList, ForbiddenList } from "./ListView";
import Form from "./FormView";
import Post from "./Posts";

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Articles</h2>
      <ArticleList />
      <h2>Forbidden</h2>
      <ForbiddenList />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>Add a new article</h2>
      <Form />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>API posts</h2>
      <Post />
    </div>
  </div>
);
export default App;
