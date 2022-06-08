import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

function NavbarDashboard() {
  const profile = useSelector((state) => state.allReducers.user);
  const navigate = useNavigate();
  const toProfile = (e) => {
    e.preventDefault();
    navigate("/profile");
  };
  console.log(profile, "--profile-->>>>");
  return (
    <Navbar>
      <Container style={{ marginTop: "3em" }}>
        <Navbar.Brand href="/">
          <h3>CINTA CODING</h3>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Link to="/dashboard"><h3>Post</h3></Link>
        <Navbar.Collapse className="justify-content-end">
          <h3>
            Welcome,
            <a href="" onClick={toProfile}>
              <h3>{profile.username}</h3>
            </a>
          </h3>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDashboard;
