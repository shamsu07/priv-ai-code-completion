import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Home, Landing, Login, Signup } from "./screens";
import "./styles.css";

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const theUser = localStorage.getItem("user");

    if (theUser && !theUser.includes("undefined")) {
      setUser(JSON.parse(theUser));
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user?.email ? <Navigate to="/home" /> : <Landing />}
        />
        <Route
          path="/signup"
          element={user?.email ? <Navigate to="/home" /> : <Signup />}
        />
        <Route
          path="/login"
          element={user?.email ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="/home"
          // element={user?.email ? <Home user={user} /> : <Navigate to="/" />}
          element={<Home user={user} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// const [code, setCode] = useState("");
// const [completedCode, setCompletedCode] = useState("");

// const options = ["C", "C++", "C#", "Go", "Java", "Javascript", "Python"];
// const [selected, setSelected] = useState(options[0]);

// const handleChange = event => {
//   setSelected(event.target.value);
// };

// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: "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"
// });
// const openai = new OpenAIApi(configuration);

// const handleSubmit = async event => {
//   event.preventDefault();
//   try {
//     const response = await openai.createCompletion({
//       model: "text-davinci-002",
//       prompt: `${selected} Code for ${code}`,
//       max_tokens: 2048,
//       temperature: 0.7
//     });
//     setCompletedCode(response.data.choices[0].text);
//   } catch (error) {
//     console.error(error);
//     setCompletedCode("An error occurred");
//     setCompletedCode(error.message);
//   }
// };

{
  /* <div className="container">
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
      placeholder="Type something like ... Print the middle node in a linked list "
      onChange={(event) => setCode(event.target.value)}
    />
    <div className="button-container">
      <button type="submit">Complete Code</button>
    </div>
  </form>
  <pre>{completedCode}</pre>
</div> */
}
