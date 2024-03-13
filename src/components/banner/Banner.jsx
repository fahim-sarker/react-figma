import React from 'react'
import "./banner.css"
import { Col,Container,Row } from 'react-bootstrap'
import Ban from "../../assets/banner.png"

const Banner = () => {
  return (
    <div id='banner'>
        <Container>
          <Row>
            <Col lg ={6}>
                <div className="ban-text">
                <h1>Managing business payments has never been easier</h1>
                <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                <div className="ban-end">
                    <div className="ban-btn">
                        <a href="#">get started</a>
                    </div>
                    <div className="ban-text">
                        <a href="#"><i class="fa-regular fa-circle-play"></i> See How It Works</a>
                    </div>
                </div>
                </div>
            </Col>
            <Col lg ={6}>
                <div className="ban-img">
                    <img src={Ban}alt="banner"/>
                </div>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Banner
