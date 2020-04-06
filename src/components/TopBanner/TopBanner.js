import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default class TopBanner extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className='topFixedBanner p-0'>
          <div className='topBannerOverlay'>
            <Container className='topContent'>
              <Row>
                <Col className='text-center'>
                  <h1 className='topBannerTitle'>Trinoq Technology</h1>
                  <p className='topBannerSubTitle'>
                    A better way to present Startup-Pro template.
                  </p>
                  <Button variant='outline-success'>More Info</Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}
