import React, { useState } from "react";
import openai from "openai";
import "./styles.css";

function App() {
  const [code, setCode] = useState("");
  const [completedCode, setCompletedCode] = useState("");

  const options = ["C", "C++", "C#", "Go", "Java", "Javascript", "Python"];
  const [selected, setSelected] = useState(options[0]);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: `${selected} Code for ${code}`,
        max_tokens: 2048,
        temperature: 0.7,
      });
      setCompletedCode(response.data.choices[0].text);
    } catch (error) {
      console.error(error);
      setCompletedCode("An error occurred");
      setCompletedCode(`Error: ${error.message}`);
    }
  };
  return (
    <div className="container">
      <label htmlFor="select">program in</label>
      <select id="select" value={selected} onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <form onSubmit={handleSubmit}>
        <textarea
          className="text-editor"
          value={code}
          placeholder="Type something... "
          onChange={(event) => setCode(event.target.value)}
        />
        <div className="button-container">
          <button type="submit">Generateenerate Code</button>
        </div>
      </form>
      <pre>{completedCode}</pre>
    </div>
  );
}

export default App;
