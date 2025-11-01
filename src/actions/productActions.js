import axios from 'axios';
import { getProductsStart, getProductsSuccess, getProductsFailure } from '../reducers/productReducer';

const API_URL = process.env.REACT_APP_API_URL; 

export const getProducts = () => async (dispatch) => {
    try {
        dispatch(getProductsStart());

        const res = await axios.get(`${API_URL}/api/products`);
        
        dispatch(getProductsSuccess(res.data.products));
    } catch (error) {
        console.error("API Call Failed:", `${API_URL}/api/products`, error.response?.data);
        
        dispatch(getProductsFailure(error.response?.data?.message || 'Error fetching products'));
    }
};
