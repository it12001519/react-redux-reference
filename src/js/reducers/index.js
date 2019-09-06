import { combineReducers } from "redux";
import {
  ADD_ARTICLE,
  FOUND_BAD_WORD,
  DATA_LOADED
} from "../constants/action-types";

const initialState = {
  articles: [],
  forbidden: [],
  remoteArticles: []
};

const AddArticle = (state = initialState, action) => {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }

  return state;
};

const AddForbidden = (state = initialState, action) => {
  if (action.type === FOUND_BAD_WORD) {
    return Object.assign({}, state, {
      forbidden: state.forbidden.concat(action.payload)
    });
  }
  return state;
};
// Experimenting with combineReducers
const rootReducer = combineReducers({ AddArticle, AddForbidden });

export default rootReducer;
