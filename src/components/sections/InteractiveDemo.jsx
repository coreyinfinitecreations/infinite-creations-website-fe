import React, { useState } from "react";
import Button from "../common/Button";
import "./InteractiveDemo.css";

const InteractiveDemo = () => {
  const [count, setCount] = useState(0);

  return (
    <section className="interactive-demo">
      <h3>Interactive Demo</h3>
      <div className="demo-card">
        <Button
          onClick={() => setCount((count) => count + 1)}
          variant="primary"
        >
          Click Count: {count}
        </Button>
        <p>
          This is a simple interactive element to demonstrate our React
          capabilities
        </p>
      </div>
    </section>
  );
};

export default InteractiveDemo;
