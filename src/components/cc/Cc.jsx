import React from 'react'
import "./cc.css"
import { Container,Col,Row } from 'react-bootstrap'
import Cr from "../../assets/eleven.png"

const Cc = () => {
  return (
    <div id='cc'>
      <Container>
        <Row>
            <Col lg={6}>
                <div className="cc-img">
                    <p>Testimonials</p>
                    <h3>Check what our clients are saying</h3>
                    <img src={Cr} alt="" />
                    <i class="fa-solid fa-arrow-left"></i><i class="fa-solid fa-arrow-right"></i>
                </div>
            </Col>
            <Col lg={{span:4,offset:2}}>
                <div className="cc-text">
                    <h4>Save Time Managing Social Media For Your Business</h4>
                    <p>Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>
                    <p>Believing neglected so so allowance existence departure in. In design active temper be uneasy. </p>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <h4>angela taylor</h4>
                    <p>ceo samsung</p>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Cc
