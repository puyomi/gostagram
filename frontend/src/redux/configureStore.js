import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { composeWithDevTools } from "redux-devtools-extension";
import { i18nState } from "redux-i18n";
import users from "redux/modules/users";
// import Reactotron from "ReactotronConfig";

const env = process.env.NODE_ENV;

const history = createBrowserHistory();

const middlewares = [thunk, routerMiddleware(history)];

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const reducer = combineReducers({
  users,
  i18nState
});

let store;

if (env === "development") {
  store = initialState =>
    createStore(
      connectRouter(history)(reducer),
      composeWithDevTools(applyMiddleware(...middlewares))
    );
} else {
  store = initialState =>
    createStore(
      connectRouter(history)(reducer),
      compose(applyMiddleware(...middlewares))
    );
}

export { history };

export default store();
