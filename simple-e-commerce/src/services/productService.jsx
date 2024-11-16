import axios from 'axios';

export const fetchProducts = () => {
    try{
        return axios.get('https://fakestoreapi.com/products');
    }catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};