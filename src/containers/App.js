// Redux
import { connect } from 'react-redux';
// Custom
import Counter from '../components';
import {
    INCREMENT,
    DECREMENT,
    increase, 
    decrease,
} from '../redux/modules/counter';

const mapStateToProps = (state) => ({
    count: state.count
});

const mapDispatchToProps = (dispatch) => ({
    onIncrease: () => dispatch(increase()),
    onDecrease: () => dispatch(decrease()),
});

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default App;