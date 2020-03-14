import React from "react";
import logo from "../logo.svg";

import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Button,
  Navbar,
  Nav,
  NavbarBrand,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const AVATAR =
  "https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg";

const Header = () => (
  <header>
    <Navbar
      expand="xs"
      className="border-bottom border-gray header-style"
      style={{ height: 60 }}
    >
      <Container>
        <Row noGutters className="position-relative w-100 align-items-center">
          <Col className="d-none d-lg-flex justify-content-start">
            <Nav className="mrx-auto" navbar>
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold footer-text" href="/">
                  <h4>Book-Ink</h4>
                </NavLink>
              </NavItem>
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold footer-text" href="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold footer-text" href="/books">
                  Books
                </NavLink>
              </NavItem>
              <NavItem className="d-flex align-items-center">
                <NavLink
                  className="font-weight-bold footer-text"
                  href="/authors"
                >
                  Authors
                </NavLink>
              </NavItem>
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold footer-text" href="/blog">
                  Blog
                </NavLink>
              </NavItem>
            </Nav>
          </Col>

          {/* <Col className="d-flex justify-content-xs-start justify-content-lg-center">
            <NavbarBrand
              className="d-inline-block p-0"
              href="/"
              style={{ width: 80 }}
            >
              <img
                src={logo}
                alt="logo"
                className="position-relative img-fluid"
              />
            </NavbarBrand>
          </Col> */}

          <Col className="d-none d-lg-flex justify-content-end">
            <Form inline>
              <Input
                type="search"
                className="mr-3"
                placeholder="Search Books"
              />
              <Button
                type="submit"
                color="info"
                outline
                className="footer-text"
              >
                Search
              </Button>
            </Form>
            {/* <UncontrolledDropdown
              className="d-flex align-items-center"
              nav
              inNavbar
            >
              <DropdownToggle className="font-weight-bold" nav caret>
                <img
                  src={AVATAR}
                  alt="avatar"
                  className="img-fluid rounded-circle"
                  style={{ width: 36 }}
                />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem
                  className="font-weight-bold text-secondary text-uppercase"
                  header
                  disabled
                >
                  Learn React
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Documentation</DropdownItem>
                <DropdownItem>Tutorials</DropdownItem>
                <DropdownItem>Courses</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Col>
        </Row>
      </Container>
    </Navbar>
  </header>
);

export default Header;
