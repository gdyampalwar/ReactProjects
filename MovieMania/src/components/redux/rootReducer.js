import { combineReducers } from "redux";
import movieReducer from "./MovieReducer";

const rootReducer = combineReducers({
    movie: movieReducer
})

export default rootReducer 