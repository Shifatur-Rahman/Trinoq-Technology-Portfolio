import React, { Component, Fragment } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className='contact text-center'>
          <br />
          <br />
          <br />

          <div className='center'>
            <div>
              <h1 className='contactTitle'>Get In Touch</h1>
            </div>

            <div>
              <hr className='hrMargin' />
            </div>

            <p className=' contactPara text-center'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores similique dolor <br /> ab inventore, veritatis deserunt
              suscipit vitae minima.
            </p>
          </div>

          <Container>
            <Row>
              <Col lg={2}></Col>
              <Col sm={12} md={12} lg={7} className='contactMargin'>
                <Form>
                  <Form.Group>
                    <Form.Control
                      type='email'
                      className='one'
                      placeholder='Name'
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Control
                      type='email'
                      className='one'
                      placeholder='Email'
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Control
                      as='textarea'
                      rows='5'
                      type='text'
                      className='one'
                      placeholder='Your Message'
                    />
                  </Form.Group>

                  <Button
                    className='contactButton text-uppercase'
                    variant='secondary'
                    type='submit'
                  >
                    Send message
                  </Button>
                </Form>
              </Col>
              <Col lg={2}></Col>
            </Row>
          </Container>
        </Container>
      </Fragment>
    );
  }
}
export default Contact;
