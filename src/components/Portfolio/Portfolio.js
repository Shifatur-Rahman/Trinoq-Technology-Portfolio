import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import picTen from "../../asset/img/slider2.jpg";

export default class Portfolio extends Component {
  render() {
    return (
      <Fragment>
        <div className='portfolioSection '>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <div className='portfolio '>
                <h2 className='portfolioTitle text-center'>
                  Explore premium services
                </h2>
                <p className='portfolioPara text-center'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  <br />
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took <br /> a galley of type and scrambled it
                  to make a type specimen book.
                </p>
              </div>
            </Col>
            <Container>
              <Col sm={12} md={12} lg={12}>
                <Row>
                  <Col sm={12} md={12} lg={4}>
                    <div className='blog-post bg-white'>
                      <div className='blog-image'>
                        <a href='#section'>
                          <img
                            className='img100'
                            alt='picccc'
                            src={picTen}
                            style={{ width: "200px", height: "203px" }}
                          />
                        </a>
                      </div>
                      <Container>
                        <div className='post-details text-center'>
                          <h2 className='post-details-title'>
                            Creativity takes courage
                          </h2>
                          <div className='post-details-para'>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's.
                          </div>
                        </div>
                      </Container>
                    </div>
                  </Col>

                  <Col sm={12} md={12} lg={4}>
                    <div className='blog-post bg-white'>
                      <div className='blog-image'>
                        <a href='#section'>
                          <img
                            className='img100'
                            alt='picccc'
                            src={picTen}
                            style={{ width: "200px", height: "203px" }}
                          />
                        </a>
                      </div>
                      <Container>
                        <div className='post-details text-center'>
                          <h2 className='post-details-title'>
                            Creativity takes courage
                          </h2>
                          <div className='post-details-para'>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's.
                          </div>
                        </div>
                      </Container>
                    </div>
                  </Col>

                  <Col sm={12} md={12} lg={4}>
                    <div className='blog-post bg-white'>
                      <div className='blog-image'>
                        <a href='#section'>
                          <img
                            className='img100'
                            alt='picccc'
                            src={picTen}
                            style={{ width: "200px", height: "203px" }}
                          />
                        </a>
                      </div>
                      <Container>
                        <div className='post-details text-center'>
                          <h2 className='post-details-title'>
                            Creativity takes courage
                          </h2>
                          <div className='post-details-para'>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's.
                          </div>
                        </div>
                      </Container>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Container>

            <Container>
              <Col sm={12} md={12} lg={12}>
                <Row>
                  <Col sm={12} md={12} lg={4}>
                    <div className='blog-post bg-white'>
                      <div className='blog-image'>
                        <a href='#section'>
                          <img
                            className='img100'
                            alt='picccc'
                            src={picTen}
                            style={{ width: "200px", height: "203px" }}
                          />
                        </a>
                      </div>
                      <Container>
                        <div className='post-details text-center'>
                          <h2 className='post-details-title'>
                            Creativity takes courage
                          </h2>
                          <div className='post-details-para'>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's.
                          </div>
                        </div>
                      </Container>
                    </div>
                  </Col>

                  <Col sm={12} md={12} lg={4}>
                    <div className='blog-post bg-white'>
                      <div className='blog-image'>
                        <a href='#section'>
                          <img
                            className='img100'
                            alt='picccc'
                            src={picTen}
                            style={{ width: "200px", height: "203px" }}
                          />
                        </a>
                      </div>
                      <Container>
                        <div className='post-details text-center'>
                          <h2 className='post-details-title'>
                            Creativity takes courage
                          </h2>
                          <div className='post-details-para'>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's.
                          </div>
                        </div>
                      </Container>
                    </div>
                  </Col>

                  <Col sm={12} md={12} lg={4}>
                    <div className='blog-post bg-white'>
                      <div className='blog-image'>
                        <a href='#section'>
                          <img
                            className='img100'
                            alt='picccc'
                            src={picTen}
                            style={{ width: "200px", height: "203px" }}
                          />
                        </a>
                      </div>
                      <Container>
                        <div className='post-details text-center'>
                          <h2 className='post-details-title'>
                            Creativity takes courage
                          </h2>
                          <div className='post-details-para'>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's.
                          </div>
                        </div>
                      </Container>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Container>
          </Row>
        </div>
      </Fragment>
    );
  }
}
