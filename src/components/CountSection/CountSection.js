import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import smile from "../../asset/img/smiley.png";
import heart from "../../asset/img/heart.png";
import comment from "../../asset/img/comment.png";
export default class CountSection extends Component {
  render() {
    return (
      <Fragment>
        <Container
          fluid={true}
          className='topFixedBannerCountUp CountUpMargin p-0'
        >
          <div className='topBannerOverlayCountUp'>
            <Container className='text-center'>
              <Row className='count'>
                <Col sm={12} md={4} lg={4} className='text-center'>
                  <img src={heart} alt='icon' className='iconBullet' />
                  <h1 className='countNumber'>
                    <CountUp start={0} end={55}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </h1>
                  <p className=' countText'>Projects</p>
                  <hr className='bg-white w-25' />
                </Col>

                <Col sm={12} md={4} lg={4} className='text-center'>
                  <img src={smile} alt='icon' className='iconBullet' />
                  <h1 className='countNumber'>
                    <CountUp start={0} end={30}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </h1>
                  <p className=' countText'>Clients</p>
                  <hr className='bg-white w-25' />
                </Col>

                <Col sm={12} md={4} lg={4} className='text-center'>
                  <img src={comment} alt='icon' className='iconBullet' />
                  <h1 className='countNumber'>
                    <CountUp start={0} end={30}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </h1>
                  <p className=' countText'>Comments</p>
                  <hr className='bg-white w-25' />
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}
