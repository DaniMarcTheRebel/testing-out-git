//feature branch
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [elemList, setElemList] = useState([]);

  useEffect(() => {
    setTitle("");
  }, [elemList]);

  return (
    <div className="App">
      <div>{title}</div>
      <div>
        <button
          onClick={() => {
            setTitle(Date.now);
          }}
        >
          CLICK ME HEHEHEEHEHE
        </button>
        <br />
        <br />
        <br />
      </div>
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
        {/* Feature branch */}
      </div>
    </div>
  );
}

export default App;
