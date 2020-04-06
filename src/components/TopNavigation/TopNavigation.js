import React, { Component, Fragment } from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import whiteLogo from "../../asset/img/whiteLogo.png";
import blackLogo from "../../asset/img/blackLogo.png";
import "../../asset/css/custom.css";
import { Link } from "react-scroll";

export default class TopNavigation extends Component {
  state = {
    navBarLogo: [whiteLogo],
    navBarBackground: "navBackground",
    navBarItem: "navItem",
    navVariant: "dark",
  };

  onScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        navBarLogo: [blackLogo],
        navBarBackground: "navBackgroundScroll",
        navBarItem: "navItemScroll",
        navVariant: "light",
      });
    } else if (window.scrollY < 100) {
      this.setState({
        navBarLogo: [whiteLogo],
        navBarBackground: "navBackground",
        navBarItem: "navItem",
        navVariant: "dark",
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  render() {
    return (
      <Fragment>
        <Navbar
          className={this.state.navBarBackground}
          fixed='top'
          collapseOnSelect
          expand='lg'
          variant={this.state.navVariant}
        >
          <Navbar.Brand>
            <img className='wLogo' alt='logo' src={this.state.navBarLogo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'></Nav>
            <Nav>
              <NavItem className={this.state.navBarItem}>
                <Link
                  activeClass='active'
                  to='services'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1500}
                >
                  Services
                </Link>
              </NavItem>

              <NavItem>
                <Link
                  className={this.state.navBarItem}
                  activeClass='active'
                  to='portfolioSection'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1500}
                >
                  Portfolio
                </Link>
              </NavItem>

              <NavItem>
                <Link
                  className={this.state.navBarItem}
                  activeClass='active'
                  to='clientReview'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1500}
                >
                  Review
                </Link>
              </NavItem>

              <NavItem>
                <Link
                  className={this.state.navBarItem}
                  activeClass='active'
                  to='team'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={2000}
                >
                  Team
                </Link>
              </NavItem>

              <NavItem>
                <Link
                  className={this.state.navBarItem}
                  activeClass='active'
                  to='contact'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={2000}
                >
                  Contact
                </Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}
