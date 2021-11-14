import axios from 'axios';
import { SET_ORDERS } from '../types';

export const addOrders = csvFile => {
    return async dispatch => {
        try {
            const { data } = await axios.post('/orders', csvFile);
            console.log(data);
            dispatch({
                type: SET_ORDERS,
                orders: data,
            });
        } catch (err) {
            console.error(err);
        }
    };
};
