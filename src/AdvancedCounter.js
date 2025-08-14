import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CounterButton({ increment, onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

CounterButton.propTypes = {
  increment: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

function AdvancedCounter() {
  const [count, setCount] = useState(0);

  const handleIncrement = (increment) => {
    setCount(count + increment);
  };

  return (
    <div>
      <h2>завдання 3</h2>
      <p>Значення: {count}</p>
      <CounterButton increment={10} onClick={() => handleIncrement(10)}>
        +10
      </CounterButton>
      <CounterButton increment={-100} onClick={() => handleIncrement(-100)}>
        -100
      </CounterButton>
      <CounterButton increment={25} onClick={() => handleIncrement(25)}>
        +25
      </CounterButton>
    </div>
  );
}

export default AdvancedCounter;
