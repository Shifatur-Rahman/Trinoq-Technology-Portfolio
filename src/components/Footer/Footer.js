import React, { Component, Fragment } from "react";
import { Row, Container, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className=' text-center footerSection'>
          <Row>
            <Col sm={12} md={6} lg={3} className='p-5 text-justify'>
              <h2 className='footerTitle text-uppercase'> Follow us </h2>
              <a className='socialLink ' href='#section'>
                {" "}
                <FontAwesomeIcon
                  className='icon'
                  icon={faFacebook}
                /> Facebook{" "}
              </a>
              <br />
              <a className='socialLink ' href='#section'>
                <FontAwesomeIcon className='icon' icon={faYoutube} /> Youtube
              </a>
              <br />
              <a className='socialLink ' href='#section'>
                <FontAwesomeIcon className='icon' icon={faTwitter} /> Twitter
              </a>
            </Col>

            <Col sm={12} md={6} lg={3} className='p-5 text-justify'>
              <h2 className='footerTitle text-uppercase'>Address </h2>
              <p className='footerAddress '>
                #79/6 kemal Attartuk Avenue,
                <br /> 3rd Floor,Banani, Dhaka
              </p>
              <p className=' socialLink'>
                {" "}
                <FontAwesomeIcon icon={faEnvelope} /> trinoq@gmail.com
              </p>
              <p className=' socialLink'>
                <FontAwesomeIcon icon={faPhone} /> 01921601608
              </p>
            </Col>

            <Col sm={12} md={6} lg={3} className='p-5 text-justify'>
              <h2 className='footerTitle text-uppercase'>Information </h2>
              <a className='footerLink' href='#section'>
                About us
              </a>{" "}
              <br />
              <a className='footerLink' href='#section'>
                Contact us
              </a>
            </Col>

            <Col sm={12} md={6} lg={3} className='p-5 text-justify'>
              <h2 className='footerTitle text-uppercase'> Legal </h2>

              <a className='footerLink' href='#section'>
                Refund Policy
              </a>
              <br />
              <a className='footerLink' href='#section'>
                Terms And Condition
              </a>
              <br />
              <a className='footerLink' href='#section'>
                Privacy Policy
              </a>
            </Col>
          </Row>
        </Container>

        <Container fluid={true} className='text-center copyrightSection'>
          <a className='copyrightText' href='#section'>
            Trinoq Tecnnology @ copyright 2019-2020
          </a>
        </Container>
      </Fragment>
    );
  }
}
