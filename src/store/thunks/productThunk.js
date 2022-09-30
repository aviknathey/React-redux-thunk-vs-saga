import { GET } from "./../../services/apiHelper";
import { getProducts } from "./../../services/apiUrlHelper";
import { getProductsFailure, getProductsSuccess } from "./../actions/productActions";

export const getAllProducts = () => {
    return async (dispatch) => {
        try {
            let response = await GET(getProducts());
            let finalResponse = await response.json();
            dispatch(getProductsSuccess(finalResponse));
        } catch (err) {
            console.log(err);
            dispatch(getProductsFailure(err));
        }
    }
}