import { SET_ORDERS } from '../types';

const initialState = {
    data: [],
    status: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDERS:
            return {
                ...state,
                data: action.orders.data || null,
                status: action.orders.status,
            };
    }
    return state;
};
