import React from "react";
import Form from "./components/form";
import List from "./components/contactList";

const App = () => {
  return (
    <div className="grid grid-cols-2">
      <Form />
      <List />
    </div>
  );
};

export default App;
