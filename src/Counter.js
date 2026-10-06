import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  const incrementByFive = () => setCount((prev) => prev + 5);
  const reset = () => setCount(0);

  const Button = ({ title, onClick }) => {
    return <button onClick={onClick}>{title}</button>;
  };

  return (
    <div>
      <p>Counter: {count}</p>
      <Button title="increment" onClick={increment} />
      <Button title="decrement" onClick={decrement} />
      <Button title="increment By 5" onClick={incrementByFive} />
      <Button title="Reset" onClick={reset} />
    </div>
  );
};

export default Counter;
