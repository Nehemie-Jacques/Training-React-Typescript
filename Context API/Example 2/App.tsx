import React from "react";
import MyProvider from "./context/MyProvider";
import MyComponent from "../Example 1/components/MyComponent";

const App = () => {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
};

export default App;
