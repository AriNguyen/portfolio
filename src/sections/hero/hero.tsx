import React from 'react';
import { Row, Col } from "react-flexbox-grid";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import Ava from '../../assets/hero/ava.jpg';
import Button from '../../components/button/button';

import "./hero.scss";

export default function Hero() {
  return (
    <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
        <Col md={12} lg={6}>
          <div className="hero-info">
            <h1 className="weight800 font60">
                Hi! I'm Ari.
            </h1>
            <h1 className="weight800 font40">
              Computer Science Student
            </h1>
            <p className="font15">
              Pre-junior Computer Science Major at Drexel.
              Interested in the field of AI/ML and Robotics.
            </p>
            <Row className="hero-row">
              <Button target='' label="SEND MESSAGE"></Button>
              <Button target='' label="DOWNLOAD CV"></Button>
            </Row>
            <Row className="hero-row">
              <div id="social-test">
                <h2>Free Clean Social Buttons</h2>
                <ul className="social">
                  <li><FaGithub /></li>
                  <li><FaLinkedin /></li>
                </ul>
              </div>
            </Row>

          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-image">
            <img src={Ava} alt="hero" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
  )
}
