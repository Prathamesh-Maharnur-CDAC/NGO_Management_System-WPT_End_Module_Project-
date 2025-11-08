import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

export function Navigationbar() {
  return (
    <Navbar
      expand="lg"
      className="comfortaa font25"
      bg="success"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home">Adarsh Foundation</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/about-us">
              <Nav.Link href="#link">About us</Nav.Link>
            </LinkContainer>

            <NavDropdown title="Help us" id="basic-nav-dropdown">
              <LinkContainer to="/donate">
                <NavDropdown.Item>Donate</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="/apply">
                <NavDropdown.Item>Apply for volunteer</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <NavDropdown title="Sign In" id="basic-nav-dropdown">
              {/* <LinkContainer to={"/login/donor"}>
                <NavDropdown.Item>Donor</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to={"/login/Applicant"}>
                <NavDropdown.Item>Applicant</NavDropdown.Item>
              </LinkContainer> */}
              <LinkContainer to={"/login/LoginVolunteer"}>
                <NavDropdown.Item>Volunteer</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to={"/login/LoginAdmin"}>
                <NavDropdown.Item>Admin</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
