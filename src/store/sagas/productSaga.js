import { takeLatest, put, call} from "redux-saga/effects";
import * as actionTypes from "./../actions/actionTypes";
import { getProductsFailure, getProductsSuccess } from "./../actions/productActions";

import { GET } from "./../../services/apiHelper";
import { getProducts } from "./../../services/apiUrlHelper";



function* onGetProducts() {
    try {
        let response = yield call(GET, getProducts());
        let finalResponse = yield response.json();
        yield put (getProductsSuccess(finalResponse));
    } catch(err){
        console.log(err);
        yield put (getProductsFailure(err));
    }
}

export default function* ProductSaga() {
    yield takeLatest(actionTypes.GET_PRODUCTS_REQUEST, onGetProducts);
}