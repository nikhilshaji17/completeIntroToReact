import React from "react";
import {createRoot} from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", null, [
    React.createElement("h1", null, props.name),
    React.createElement("p", null, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", null, [
    React.createElement("h1", null, "Padre Gino's"),
    Pizza({
      name: "The Pepperoni Pizza",
      description: "Mozzarella and Pepperoni",
    }),
    React.createElement(Pizza, {
      name: "The Hawaiian Pizza",
      description: "Sliced Ham, Pineapple, Mozzarella Cheese",
    }),
    React.createElement(Pizza, {
      name: "The Big Meat Pizza",
      description: "Bacon, Pepperoni, Italian Sausage, Chorizo Sausage",
    }),
  ]);
};

const container = document.getElementById("root"); // Rendering depends on where your root starts.

const root = createRoot(container);
root.render(React.createElement(App));
