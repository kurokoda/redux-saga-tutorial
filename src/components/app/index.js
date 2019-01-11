import React from "react";
import Counter from "../../components/counter";

const App = ({ count, increment, decrement, incrementAsync }) => {
  return (
    <div>
      Hello World
      <Counter
        value={count}
        onIncrement={increment}
        onDecrement={decrement}
        onIncrementAsync={incrementAsync}
      />
    </div>
  );
};

export default App;
