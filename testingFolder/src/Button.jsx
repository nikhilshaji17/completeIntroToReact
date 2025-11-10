import { useState } from "react";

const Button = () => {
  const [counter, setButtonCount] = useState(0);

  return (
    <button
      onClick={() => {
        setButtonCount(counter + 1);
      }}
    >
      The count is: {counter}
    </button>
  );
};

export default Button;
