import * as actionTypes from "./../actions/actionTypes";

const initialState = {
    products: null,
    error: null
}

const productsReducers = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload
            };
        case actionTypes.GET_PRODUCTS_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default productsReducers;
