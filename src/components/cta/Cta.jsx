import React from 'react'
import "./cta.css"
import { Container,Col,Row } from 'react-bootstrap'
import Po from "../../assets/62.png"

const Cta = () => {
  return (
    <div id='cta'>
      <Container>
        <Row>
            <Col lg={6}>
                <div className="cta-text">
                <h5>Our Feature</h5>
                <h3>Receive payments quickly from anywhere</h3>
                 <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                </div>
            </Col>
            <Col lg={{span:4, offset:2}}>
                <img className='cta-img' src={Po} alt="" /> 
                <div className="cta-reg">
                    <h5>Get Started for Free</h5>
                    <input type="text" placeholder='email address' />
                    <input type="password" placeholder='password' />
                    <a href="#">get started</a>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Cta
