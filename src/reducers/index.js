import { combineReducers } from "redux";
import category from "./category";
import location from "./location";
import event from "./events";
import user from "./users";
import goal from "./goals";

export default combineReducers({ category, location, event, user, goal });
