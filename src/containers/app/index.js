import { connect } from "react-redux";
import App from "../../components/app";
import { increment, incrementAsync, decrement } from "../../actions/counter";

function mapStateToProps({ count }) {
  return {
    count
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(increment()),
    incrementAsync: () => dispatch(incrementAsync()),
    decrement: () => dispatch(decrement())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
