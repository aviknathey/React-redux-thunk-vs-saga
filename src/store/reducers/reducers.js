import { combineReducers } from "redux";

import productsReducers from "./productReducer";

const rootReducer = combineReducers({
    productsReducers
});

export default rootReducer;