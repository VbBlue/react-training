import React from 'react';
import Counter from '../components/Couter';
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';

const CounterContainter = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease,
  },
)(CounterContainter);
