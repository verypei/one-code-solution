import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  const navigate = useNavigate();
  // const toLogin = (e) => {
  //   e.preventDefault();
  //   navigate("/login");
  // };
  return (
    <Navbar>
      <Container style={{ marginTop: "3em" }}>
        <Navbar.Brand>
          <h3>CINTA CODING</h3>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button variant="primary" size="lg">
            <Link to="/login">Login</Link>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Home;
