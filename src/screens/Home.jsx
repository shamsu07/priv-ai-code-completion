// Home.jsx
import React from "react";
import { useState } from "react";
import LangStack from "./langStack";
import { Container, Row, Col } from "react-bootstrap";
import Search from "../components/search";

//Pass User
const Home = ({ user }) => {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  const [code, setCode] = useState("");
  const [completedCode, setCompletedCode] = useState("");

  const options = ["C", "C++", "C#", "Go", "Java", "Javascript", "Python"];
  const [selected, setSelected] = useState(options[0]);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("Yooooooooooooooo!!!!!!!!!!!!!!1");
    } catch (error) {
      console.error(error);
      setCompletedCode("An error occurred");
      setCompletedCode(error.message);
    }
  };

  return (
    <Container className="container">
      <header style={{ textAlign: "center" }}>
        <h1>AutoCode</h1>
      </header>
      <div className="langstack">
        <LangStack />
      </div>
      <div>
        {/* <Search /> */}
        <form onSubmit={handleSubmit}>
          <input
            className="text-editor"
            value={code}
            // on={console.log("AAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")}
            placeholder="Type something like ..."
            onChange={(event) => setCode(event.target.value)}
          />
          <div>
            <button>
              <span class="button_top"> Generate Code</span>
            </button>
          </div>
        </form>
        <pre>{completedCode}</pre>
      </div>
    </Container>
  );
};

export default Home;

{
  /* <label htmlFor="select">program in</label>
<select id="select" value={selected} onChange={handleChange}>
  {options.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ))}
</select> */
}

{
  /* <div>
        <button
          onClick={logout}
          style={{
            color: "red",
            border: "1px solid gray",
            backgroundColor: "white",
            padding: "0.5rem 1rem",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div> */
}
