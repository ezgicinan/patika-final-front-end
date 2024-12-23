import axios from 'axios';

export const fetchProducts = () => {
    try{
        //return axios.get('https://fakestoreapi.com/products');
        console.log('fetching products');
        return axios.get('http://localhost:8000/api/product'); 
    }catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};