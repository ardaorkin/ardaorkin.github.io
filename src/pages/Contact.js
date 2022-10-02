import React from "react";
import linkedin from "bootstrap-icons/icons/linkedin.svg";
import twitter from "bootstrap-icons/icons/twitter.svg";
import medium from "bootstrap-icons/icons/medium.svg";
import github from "bootstrap-icons/icons/github.svg";
import spotify from "bootstrap-icons/icons/spotify.svg";
import stackoverflow from "bootstrap-icons/icons/stack-overflow.svg";
import envelope from "bootstrap-icons/icons/envelope.svg";
import { Col, Row } from "react-bootstrap";

const contacts = [
  {
    alt: "LinkedIn",
    href: "https://linkedin.com/in/ardaorkin",
    icon: linkedin,
  },
  {
    alt: "Twitter",
    href: "https://twitter.com/ardaorkin",
    icon: twitter,
  },
  {
    alt: "Medium",
    href: "https://medium.com/@ardaorkin",
    icon: medium,
  },
  {
    alt: "Github",
    href: "https://github.com/ardaorkin",
    icon: github,
  },
  {
    alt: "Spotify",
    href: "https://open.spotify.com/user/cctyuo4p6sixal6l9hcdeucpo?si=svY49ZBWS6qW7dHu770yBQ",
    icon: spotify,
  },
  {
    alt: "Stack Overflow",
    href: "https://stackoverflow.com/users/12002195/arda-%c3%96rkin",
    icon: stackoverflow,
  },
];

const Contact = () => {
  return (
    <div id="contact" className="page contact">
      <Row md={{ cols: 3 }} xs={{ cols: 2 }} className="contact-row">
        {contacts.map((contact) => (
          <Col className="contact-col">
            <a href={contact.href} alt={contact.alt}>
              <img src={contact.icon} className="contact-icon" />
            </a>
          </Col>
        ))}
        <a href="mailto:ardaorkin@gmail.com" alt="gmail">
          <img src={envelope} className="contact-icon" />
        </a>
      </Row>
    </div>
  );
};

export default Contact;
