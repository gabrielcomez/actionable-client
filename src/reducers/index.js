import { combineReducers } from "redux";
import category from "./category";
import location from "./location";
import event from "./events";

export default combineReducers({ category, location, event });
