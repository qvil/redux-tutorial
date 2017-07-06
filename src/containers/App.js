// Redux
import { connect } from 'react-redux';
// Custom
import Counter from '../components/Counter';
import {
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