import React, { useEffect } from "react";

import {useSelector, useDispatch} from 'react-redux';
// ===============redux thunk===============
// import { getAllProducts } from "./../store/thunks/productThunk";

// ===============redux saga===============
import {getProducts} from "./../store/actions/productActions";

export default function Products () {

    const products = useSelector((state) => state.productsReducers.products);
    const dispatch = useDispatch();

    const fetchProducts = () => {
        // ===============redux thunk===============
        //dispatch(getAllProducts());

        // ===============redux saga===============
        dispatch(getProducts());
    }

    useEffect(() => {
        fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log('products', products);

    return(
        <>
            Hello World
        </>
    )
}