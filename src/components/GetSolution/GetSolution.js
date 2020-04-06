import React, { Component, Fragment } from "react";
import { Container, Button, Jumbotron } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default class GetSolution extends Component {
  render() {
    return (
      <Fragment>
        <Container className='getSolution'>
          <Jumbotron className='bg-white'>
            <h1 className='getSolution_title text-center'>
              The very best solution for <br />
              your business website.
            </h1>
            <p className='getSolution_para text-center'>
              We've been crafting beautiful websites, launching stunning brands
              & making clients happy <br />
              for years. With our prestigious craftsmanship, remarkable client
              <br /> care and passion for design.
            </p>
            <div className='text-center'>
              <Button className='getSolution_button' style={{ width: "200px" }}>
                Meet our people <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </div>
          </Jumbotron>
        </Container>
      </Fragment>
    );
  }
}
