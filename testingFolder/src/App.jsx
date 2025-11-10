import { createRoot } from "react-dom/client";
import Button from "./Button";

const App = () => {
  return <Button />;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
