import axios from 'axios';

export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';

export function onSearch(product) {
    return function (dispatch){
        axios.get(`/products?search=${product}`).then(res => dispatch({ type: SEARCH_PRODUCTS, payload: res.data }))
       
        
    }
};