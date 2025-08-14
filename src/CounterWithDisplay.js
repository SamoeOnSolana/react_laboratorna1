import React, { useState } from 'react';

function CounterDisplay({ count }) {
  return (
    <div>
      <p>Значення: {count}</p>
    </div>
  );
}

function CounterWithDisplay() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>завдання 2</h2>
      <button onClick={handleClick}>+1</button>
      <CounterDisplay count={count} />
    </div>
  );
}

export default CounterWithDisplay;
