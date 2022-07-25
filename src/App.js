//fix branch
import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [elemList, setElemList] = useState([]);

  return (
    <div className="App">
      <label htmlFor="todos">What todo</label>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          const newItem = {
            text,
            id: Date.now(),
          };
          setText("");
          setElemList(elemList.concat(newItem));
        }}
      >
        {" "}
        Click me to add
      </button>
      <div>
        {elemList.map((elem) => {
          return <li key={elem.id}>{elem.text.toUpperCase()}</li>;
        })}
      </div>
    </div>
  );
}

export default App;
