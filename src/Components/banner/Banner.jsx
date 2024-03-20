import React from 'react';
import './banner.css';
import { Container, Row, Col } from 'react-bootstrap';
import Ban from '../../assets/banner.png'
import { FaLongArrowAltRight } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <section id='banner_main'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="banner_text">
                            <h4>Building stellar websites for early startups</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <Row>
                                <Col lg={3}>
                                    <div className="vo">
                                    <a href="#">View our work</a>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="vp">
                                    <a href="#">View Pricing<FaLongArrowAltRight /></a>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={6}>
                       <div className="banner_img">
                       <img src={Ban} alt={Ban} />
                       </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Banner
