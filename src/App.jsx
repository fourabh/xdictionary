import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [output, setOutput] = useState("");
  const [searched, setSearched] = useState(false);
  const dictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const handleSubmit = () => {
    const result = dictionary.find(
      (elem) => elem.word.toLocaleLowerCase() == value.toLocaleLowerCase()
    );
    setOutput(result?.meaning);
    setSearched(true);
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Search</button>
      <h4>Definition:</h4>
      {searched && 
        (output ? <p>{output}</p> : <p>Word not found in the dictionary.</p>)}
    </div>
  );
}

export default App;
