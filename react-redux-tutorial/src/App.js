import './App.css';
import CounterContainter from './containers/CounterContaner';
import TodosContainer from './containers/TodosContainer';

function App() {
  return (
    <div>
      <CounterContainter />
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;
