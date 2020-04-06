import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card } from "react-bootstrap";
import MagicSliderDots from "react-magic-slider-dots";
import "react-magic-slider-dots/dist/magic-dots.css";
import sakib from "../../asset/img/sakib.jpg";
import noveli from "../../asset/img/noveltwo.PNG";

export default class ClientTestimonial extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      slidesToScroll: 2,
      arrows: false,
      appendDots: (dots) => {
        return (
          <MagicSliderDots
            style={{ color: "red" }}
            dots={dots}
            numDotsToShow={4}
            dotWidth={30}
          />
        );
      },
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            swipeToSlide: true,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            swipeToSlide: true,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Fragment>
        <Container
          fluid={true}
          className='clientFixedBanner p-0'
          id='clientReview'
        >
          <div className='clientBannerOverlay'>
            <h1 className='clientTitle text-center'>Client Testimonials...</h1>

            <Container>
              <Slider {...settings}>
                <div className='row'>
                  <div className='cardType'>
                    <Card.Img className='user' src={sakib} alt='img' />
                    <Card.Body>
                      <h5 className='clientName'> Adam Smith</h5>
                      <p className=''>Admin</p>
                      <i className='clientDescription'>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </i>
                    </Card.Body>
                  </div>
                </div>
                <div className='row'>
                  <div className='cardType'>
                    <Card.Img className='user' src={sakib} alt='img' />
                    <Card.Body>
                      <h5 className='clientName'> Adam Smith</h5>
                      <p className=''>Admin</p>
                      <i className='clientDescription'>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </i>
                    </Card.Body>
                  </div>
                </div>
                <div className='row'>
                  <div className='cardType'>
                    <Card.Img className='user' src={noveli} alt='img' />
                    <Card.Body>
                      <h5 className='clientName'> Adam Smith</h5>
                      <p className=''>Admin</p>
                      <i className='clientDescription'>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </i>
                    </Card.Body>
                  </div>
                </div>
                <div className='row'>
                  <div className='cardType'>
                    <Card.Img className='user' src={sakib} alt='img' />
                    <Card.Body>
                      <h5 className='clientName'> Adam Smith</h5>
                      <p className=''>Admin</p>
                      <i className='clientDescription'>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </i>
                    </Card.Body>
                  </div>
                </div>
                <div className='row'>
                  <div className='cardType'>
                    <Card.Img className='user' src={sakib} alt='img' />
                    <Card.Body>
                      <h5 className='clientName'> Adam Smith</h5>
                      <p className=''>Admin</p>
                      <i className='clientDescription'>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </i>
                    </Card.Body>
                  </div>
                </div>
                <div className='row'>
                  <div className='cardType'>
                    <Card.Img className='user' src={sakib} alt='img' />
                    <Card.Body>
                      <h5 className='clientName'> Adam Smith</h5>
                      <p className=''>Admin</p>
                      <i className='clientDescription'>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </i>
                    </Card.Body>
                  </div>
                </div>
              </Slider>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}
