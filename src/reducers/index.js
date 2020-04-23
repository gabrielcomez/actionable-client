import { combineReducers } from "redux";
import category from "./category";
import location from "./location";
import event from "./events";
import user from "./users";

export default combineReducers({ category, location, event, user });
