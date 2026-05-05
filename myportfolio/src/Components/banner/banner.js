import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import myCV from "../../assets/CV.pdf";
import downloadImg from "../../assets/download.png";
import "./style.css";
import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import profilePic from "../../assets/me.jpeg";

function Banner() {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="justify-content-center">
          <Image className="me" src={profilePic} alt="Myself" roundedCircle />
        </Row>
        <Row>
          <Col>
            <span>
              <h1>OMAR WAEL</h1>
            </span>
            <p>
              Full-stack developer with a Backend heart and a Game Dev soul.
              <br />I focus on building high-performance systems and immersive
              digital environments from the ground up.
            </p>
            <div className="btn-holder">
              <button className="cv-btn" onClick={() => window.open(myCV)}>
                Download CV
                <img src={downloadImg} alt="" />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
