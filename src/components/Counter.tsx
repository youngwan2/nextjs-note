"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >클릭하면 1증가</button>
    </div>
  );
};

export default Counter;
