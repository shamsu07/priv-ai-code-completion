import Container from "react-bootstrap/Container";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { DiJava, DiJavascript1, DiPython } from "react-icons/di";
import { SiCplusplus, SiC } from "react-icons/si";

function LangStack() {
  const Languages = [
    { id: 0, title: "C" },
    { id: 1, title: "C++" },
    { id: 2, title: "Java" },
    { id: 3, title: "Javascript" },
    { id: 4, title: "Python" },
  ];

  const handleLang = (id) => {};
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2}>
        <button className="tech-icons" onClick={() => handleLang(0)}>
          <SiC />
        </button>
      </Col>
      <Col xs={4} md={2}>
        <button className="tech-icons" onClick={() => handleLang(1)}>
          <SiCplusplus />
        </button>
      </Col>
      <Col xs={4} md={2}>
        <button className="tech-icons" onClick={() => handleLang(2)}>
          <DiJava />
        </button>
      </Col>
      <Col xs={4} md={2}>
        <button className="tech-icons" onClick={() => handleLang(3)}>
          <DiJavascript1 />
        </button>
      </Col>
      <Col xs={4} md={2}>
        <button className="tech-icons" onClick={() => handleLang(4)}>
          <DiPython />
        </button>
      </Col>
    </Row>
  );
}

// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import {
//   SiLinux,
//   SiVisualstudiocode,
//   SiPostman,
//   SiAndroidstudio,
//   SiAwsamplify,
// } from "react-icons/si";

// function LangStack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiLinux />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVisualstudiocode />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiPostman />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiAndroidstudio />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiAwsamplify />
//       </Col>
//     </Row>
//   );
// }

export default LangStack;
