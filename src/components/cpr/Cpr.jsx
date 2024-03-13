import React from 'react'
import "./cpr.css"
import { Container,Col,Row } from 'react-bootstrap'
import Gp from "../../assets/one.png"
import Or from "../../assets/two.png"
import Mo from "../../assets/three.png"
import Sa from "../../assets/four.png"
import Fa from "../../assets/five.png"
import Ad from "../../assets/six.png"

const Cpr = () => {
  return (
    <div id='cpr'>
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="cpr-text">
                    <h4>Over 32k+ software  businesses growing with AR Shakir</h4>
                    </div>  
                </Col>
                <Col lg={2}>
                    <img src={Gp} alt=""/>
                </Col>
                <Col lg={2}>
                    <img src={Or} alt=""/>
                </Col>
                <Col lg={2}>
                    <img src={Mo} alt=""/>
                </Col>
                <Col lg={2}>
                    <img src={Sa} alt=""/>
                </Col>
                <Col lg={2}>
                    <img src={Fa} alt=""/>
                </Col>
                <Col lg={2}>
                    <img src={Ad} alt=""/>
                </Col>

            </Row>
        </Container>
    </div>
  )
}

export default Cpr
