import { connect } from 'react-redux';
import Home from './Home';

import { addOrders } from '@/actions';

const mapState = state => ({
    edit: state.edit,
});

const mapDispatch = dispatch => ({
    addOrders: orders => {
        return dispatch(addOrders(orders));
    },
});

export default connect(mapState, mapDispatch)(Home);
