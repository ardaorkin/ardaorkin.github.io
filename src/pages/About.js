import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <div id="about" className="page about">
      <Row>
        {/* <Col md={4} className="about-img-col">
          <div className="about-img" />
        </Col> */}
        <Col>
          <div>
            <h1>
              Hello! I'm <span className="name">Arda</span>
            </h1>
            <p>A software developer</p>
            <p>
              I am a self-educated software developer. I started to my software
              developer journey at 2018. Since then, I am trying to share what
              I've learned, create useful applications for people, boost my
              abilities on software and meet with people who are curious,
              enthusiastic and open to share about IT world like me.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default About;
