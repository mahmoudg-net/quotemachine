import { createStore } from "redux";
import { initialState, dispatcher } from "./dispatcher";
export const store = createStore(dispatcher, initialState);
