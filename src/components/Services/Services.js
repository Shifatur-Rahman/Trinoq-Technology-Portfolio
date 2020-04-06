import React, { Component, Fragment } from "react";
import { Row, Col, Container } from "react-bootstrap";
import web from "../../asset/img/web.svg";
import mobile from "../../asset/img/mobile.svg";
import graphics from "../../asset/img/graphics.svg";
export default class Services extends Component {
  render() {
    return (
      <Fragment>
        <Container className='services text-center'>
          <h1 className='mainTitle'>Our Services...</h1>

          <Row>
            <Col sm={12} md={12} lg={12}>
              <Row>
                <Col lg={4} md={6} sm={12}>
                  <div className='serviceCard text-center'>
                    <img src={web} alt='webLogo' />
                    <h1 className='serviceTitle'>Web development</h1>
                    <p className='servicePara '>
                      Lorem ipsum dolor sit amet, mel vis autem habemus recteque
                      no. Ut per tota erant.
                    </p>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <div className='serviceCard text-center'>
                    <img src={mobile} alt='webLogo' />
                    <h1 className='serviceTitle'>Android</h1>
                    <p className='servicePara '>
                      Lorem ipsum dolor sit amet, mel vis autem habemus recteque
                      no. Ut per tota erant.
                    </p>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <div className='serviceCard text-center'>
                    <img src={graphics} alt='webLogo' />
                    <h1 className='serviceTitle'>graphics</h1>
                    <p className='servicePara '>
                      Lorem ipsum dolor sit amet, mel vis autem habemus recteque
                      no. Ut per tota erant.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col sm={12} md={12} lg={12}>
              <Row>
                <Col lg={4} md={6} sm={12}>
                  <div className='serviceCard text-center'>
                    <img src={web} alt='webLogo' />
                    <h1 className='serviceTitle'>Web development</h1>
                    <p className='servicePara'>
                      Lorem ipsum dolor sit amet, mel vis autem habemus recteque
                      no. Ut per tota erant.
                    </p>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <div className='serviceCard text-center'>
                    <img src={mobile} alt='webLogo' />
                    <h1 className='serviceTitle'>Android</h1>
                    <p className='servicePara '>
                      Lorem ipsum dolor sit amet, mel vis autem habemus recteque
                      no. Ut per tota erant.
                    </p>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <div className='serviceCard text-center'>
                    <img src={graphics} alt='webLogo' />
                    <h1 className='serviceTitle'>Graphics</h1>
                    <p className='servicePara '>
                      Lorem ipsum dolor sit amet, mel vis autem habemus recteque
                      no. Ut per tota erant.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
