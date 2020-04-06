import React, { Component, Fragment } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import novel from "../../asset/img/novel.jpg";
import sakib from "../../asset/img/sakib.jpg";
import noveltwo from "../../asset/img/noveltwo.PNG";
import MagicSliderDots from "react-magic-slider-dots";
import "react-magic-slider-dots/dist/magic-dots.css";

export default class OurTeam extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 3000,
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
        <Container className='team text-center '>
          <h2 className='mainTitle'>Meet Our Team</h2>

          <Slider {...settings}>
            <div>
              <div className='teamDiv '>
                <img className='teamImg p-0' src={sakib} alt='pic1' />
                <div className='cardTopic'>
                  <br />
                  <br />
                  <h3 className='memberName'>Nazmus Sakib</h3>
                  <p className='memberDesignation'>Web Developer</p>
                  <br />
                  <p className='memberText'>
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit. Proin venenatis
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className='teamDiv '>
                <div className='cardTopic'>
                  <br />
                  <br />
                  <h3 className='memberName'>Nazmus Sakib</h3>
                  <p className='memberDesignation'>Web Developer</p>
                  <br />

                  <p className='memberText'>
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit. Proin venenatis
                  </p>
                </div>
                <img className='teamImg p-0' src={sakib} alt='pic1' />
              </div>
            </div>
            <div>
              <div className='teamDiv'>
                <img className='teamImg p-0' src={novel} alt='pic1' />
                <div className='cardTopic'>
                  <br />
                  <br />
                  <h3 className='memberName'>Nazmus Sakib</h3>
                  <p className='memberDesignation'>Web Developer</p>
                  <br />

                  <p className='memberText'>
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit. Proin venenatis
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className='teamDiv '>
                <div className='cardTopic'>
                  <br />
                  <br />
                  <h3 className='memberName'>Nazmus Sakib</h3>
                  <p className='memberDesignation'>Web Developer</p>
                  <br />

                  <p className='memberText'>
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit. Proin venenatis
                  </p>
                </div>
                <img className='teamImg p-0' src={noveltwo} alt='pic1' />
              </div>
            </div>
            <div>
              <div className='teamDiv '>
                <img className='teamImg p-0' src={sakib} alt='pic1' />
                <div className='cardTopic'>
                  <br />
                  <br />
                  <h3 className='memberName'>Nazmus Sakib</h3>
                  <p className='memberDesignation'>Web Developer</p>
                  <br />

                  <p className='memberText'>
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit. Proin venenatis
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className='cardTopic'>
                <br />
                <br />
                <h3 className='memberName'>Nazmus Sakib</h3>
                <p className='memberDesignation'>Web Developer</p>
                <br />

                <p className='memberText'>
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit. Proin venenatis
                </p>
              </div>
              <img className='teamImg p-0' src={sakib} alt='pic1' />
            </div>
          </Slider>
        </Container>
      </Fragment>
    );
  }
}
