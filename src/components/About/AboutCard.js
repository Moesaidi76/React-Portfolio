import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohamed Saidi </span>
            
            <br />I am a recent graduate from Columbia Engineering bootcamp 
            with Full stack development skills.
            <br />
            <br />
            Apart from coding, some other skills I have
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> I am a licensed registered representative
            </li>
            <li className="about-activity">
              <ImPointRight /> Background in finance and retail trading 
            </li>
            <li className="about-activity">
              <ImPointRight /> 3+ Years of stock market retail experience. 
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
          “Never neglect an opportunity for self-improvement.”{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
