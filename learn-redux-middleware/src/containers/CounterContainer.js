import { connect } from "react-redux";
import { increaseSync, decreaseSync } from "../modules/counter";
import Counter from "../components/Counter";

const CounterContainer = ({ increaseSync, decreaseSync, number }) => {
  return (
    <Counter
      number={number}
      onIncrease={increaseSync}
      onDecrease={decreaseSync}
    />
  );
};

export default connect(
  (state) => ({
    number: state.counter,
  }),
  {
    increaseSync,
    decreaseSync,
  }
)(CounterContainer);
