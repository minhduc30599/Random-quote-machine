import { combineReducers } from "redux";
import generateReducer from "./generateQuote/generateQuote.reducer";

const rootReducer = combineReducers({
     generateQuote: generateReducer
});

export default rootReducer;