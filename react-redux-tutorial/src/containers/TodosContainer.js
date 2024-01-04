import React, { useCallback } from 'react';
import Todos from '../components/Todos';
import { useSelector, useDispatch } from 'react-redux';
import { changeInput, insert, remove, toggle } from '../modules/todos';
import useActions from '../lib/useActions';

const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));

  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    [],
  );
  // const dispatch = useDispatch();

  // const onChangeInput = useCallback(
  //   (input) => {
  //     dispatch(changeInput(input));
  //   },
  //   [dispatch],
  // );
  // const onInsert = useCallback(
  //   (text) => {
  //     dispatch(insert(text));
  //   },
  //   [dispatch],
  // );
  // const onRemove = useCallback(
  //   (id) => {
  //     dispatch(remove(id));
  //   },
  //   [dispatch],
  // );
  // const onToggle = useCallback(
  //   (id) => {
  //     dispatch(toggle(id));
  //   },
  //   [dispatch],
  // );

  return (
    <Todos
      input={input}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onRemove={onRemove}
      onToggle={onToggle}
      todos={todos}
    />
  );
};

export default React.momo(TodosContainer);
