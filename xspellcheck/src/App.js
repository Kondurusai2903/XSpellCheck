import React, { useState, useEffect } from "react";
function App() {
  const [input, setInput] = useState("");
  const [val, setVal] = useState("");
  const customDictionary = {
    teh: "the",

    wrok: "work",

    fot: "for",

    exampl: "example",
  };
  function res(input, customDictionary) {
    let result = input.split(" ");
    // console.log(result, "this is the splitted value");
    for (let i = 0; i < result.length; i++) {
      if (customDictionary[result[i].toLowerCase()]) {
        return customDictionary[result[i].toLowerCase()];
      }
    }
    return "";
  }
  useEffect(() => {
    let result = res(input, customDictionary);
    // console.log(result, "this is the returned value");
    setVal(result);
  }, [input]);

  console.log(input);
  console.log(val);
  return (
    <div className="App">
      <h1>Spell Check and Auto-Correction</h1>
      <div>
        <textarea
          placeholder="Enter text..."
          rows="6"
          cols="50"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
      </div>
      {val ? <p>Did you mean: {val}?</p> : ""}
    </div>
  );
}

export default App;
