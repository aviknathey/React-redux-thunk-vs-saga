import * as actionTypes from "./actionTypes";

export const getProducts = (err) => {
    return {
        type: actionTypes.GET_PRODUCTS_REQUEST
    }
}

export const getProductsSuccess = (data) => {
    return {
        type: actionTypes.GET_PRODUCTS_SUCCESS,
        payload: data
    }
}

export const getProductsFailure = (err) => {
    return {
        type: actionTypes.GET_PRODUCTS_FAILURE,
        payload: err
    }
}