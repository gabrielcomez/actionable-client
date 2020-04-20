import { combineReducers } from "redux";
import category from "./category";
import location from "./location";
import event from "./events";
import users from "./users";

export default combineReducers({ category, location, event, users });
