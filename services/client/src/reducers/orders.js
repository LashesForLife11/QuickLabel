import { SET_ORDERS } from '../types';

const initialState = {
    labels: [],
    freights: [],
    status: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDERS:
            return {
                ...state,
                labels: action.orders.data.labels || null,
                freights: action.orders.data.freights || null,
                status: action.orders.status,
            };
    }
    return state;
};
