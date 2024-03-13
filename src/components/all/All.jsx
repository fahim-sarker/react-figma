import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import "./all.css"
import Za from "../../assets/nine.png"

const All = () => {
  return (
    <div id='all'>
      <Container>
        <Row>
            <Col lg={6}>
                <div className="all-text">
                    <h5>Our Feature</h5>
                    <h3>All payments are linked your to financy account</h3>
                    <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                    <a href="#">get started</a>
                </div>
            </Col>
            <Col lg={6}>
                <div className="all-img">
                    <img src={Za} alt="" />
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default All
