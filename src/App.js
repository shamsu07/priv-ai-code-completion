import React, { useState } from "react";
import openai from "openai";
import "./styles.css";

function App() {
  const [code, setCode] = useState("");
  const [completedCode, setCompletedCode] = useState("");

  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: ""
  });
  const openai = new OpenAIApi(configuration);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: `Code for ${code}`,
        max_tokens: 2048,
        temperature: 0.7
      });
      setCompletedCode(response.data.choices[0].text);
    } catch (error) {
      console.error(error);
      setCompletedCode("An error occurred");
    }
  };
  return (
    <div className="container">
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
