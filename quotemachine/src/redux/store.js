import { createStore } from "redux";
import { initialState, dispatcher } from "./reducers";
export const store = createStore(
  dispatcher,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
