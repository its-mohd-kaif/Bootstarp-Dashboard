import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../Images/logo.png";
import user from "../Images/user.jpg";
import Badge from "react-bootstrap/Badge";
import Sidebar from "./Sidebar";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <span style={{marginLeft:"7em"}}>
        <Sidebar />
        </span>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Search"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text
                style={{ background: "transparent" }}
                id="basic-addon2"
              >
                <i className="fas fa-search" style={{ fontSize: "26px" }}></i>
              </InputGroup.Text>
            </InputGroup>
          </Nav>
          <Form style={{ marginRight: "7em" }} className="d-flex">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">
                <i
                  className="material-icons"
                  style={{ fontSize: "36px", color: "blue" }}
                >
                  notifications_none
                </i>
                <Badge style={{top:"0"}} className="badge bg-primary badge-number">4</Badge>
              </Nav.Link>
              <Nav.Link href="#action2">
                <i
                  className="material-icons"
                  style={{ fontSize: "36px", color: "blue" }}
                >
                  message
                </i>
                <Badge bg="success">3</Badge>
              </Nav.Link>
              <NavDropdown
                title={
                  <img
                    style={{ width: "2em", borderRadius: "50%" }}
                    src={user}
                    alt="user"
                  />
                }
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">
                  <center>
                    <div>Kevin Anderson</div>
                    <span style={{ color: "gray", fontWeight: "300" }}>
                      Web Designer
                    </span>
                  </center>
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  <span style={{ fontSize: "17px" }}>
                    <i class="fa fa-user-o"></i> My Profile
                  </span>
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item href="#action4">
                  <span style={{ fontSize: "17px" }}>
                    <i class="fas fa-sign-out-alt"></i> Sign out
                  </span>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
