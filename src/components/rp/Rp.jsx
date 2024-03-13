import React from 'react'
import "./rp.css"
import { Container,Col,Row } from 'react-bootstrap'
import Ad from "../../assets/seven.png"

const Rp = () => {
  return (
    <div id='releted'>
      <Container>
        <Row>
            <Col lg={6}>
                <div className="rr-img">
                    <img src={Ad} alt="" />
                </div>
            </Col>
            <Col lg={6}>
                <div className="rp-text">
                    <h5>Our Feature</h5>
                    <h3>Receive payments quickly from anywhere</h3>
                    <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                    <a href="#">get started</a>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Rp
