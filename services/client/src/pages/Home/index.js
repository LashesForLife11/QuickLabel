import { connect } from 'react-redux';
import Home from './Home';

import { addOrders } from '@/actions';

const mapState = state => ({
    orders: state.orders,
});

const mapDispatch = dispatch => ({
    addOrders: orders => {
        return dispatch(addOrders(orders));
    },
});

export default connect(mapState, mapDispatch)(Home);
