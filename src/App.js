import React, { useState } from "react";
import openai from "openai";
import "./styles.css";

function App() {
  const [code, setCode] = useState("");
  const [completedCode, setCompletedCode] = useState("");

  const options = ["C", "C++", "Java", "Javascript", "Python"];
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
      setCompletedCode(error.message);
    }
  };
  return (
    <div className="container">
      <label htmlFor="select">Select an option:</label>
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
          onChange={(event) => setCode(event.target.value)}
        />
        <button type="submit">Complete Code</button>
      </form>
      <pre>{completedCode}</pre>
    </div>
  );
}

export default App;
