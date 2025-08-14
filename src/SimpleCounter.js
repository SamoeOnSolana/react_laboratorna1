import React, { useState } from 'react';

function SimpleCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>завдання 1</h2>
      <button onClick={handleClick}>
        {count}
      </button>
    </div>
  );
}

export default SimpleCounter;
