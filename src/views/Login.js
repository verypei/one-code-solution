import React, { useRef, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { setUser } from "../store/actions";
import { useDispatch } from "react-redux";
import DB_USER from "../user.json";

function Login() {
  const usernameRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const submitLogin = (e) => {
    e.preventDefault();
    let username = usernameRef.current.value;
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
          let flag = true;
        for (let i = 0; i < data.length; i++) {
            if(data[i].username === username){
                dispatch(setUser(data[i]));
                navigate('/dashboard');
                flag = false;
                break;
            }
        }
        if(flag){
            setError(true);
        }
      });

    //========================================== JSON DATA TRIAL SET =============================
    // let flag = true;
    // for (let i = 0; i < data.length; i++) {
    //   if (data[i].username === username) {
    //     dispatch(setUser(data[i]));
    //     flag = false;
    //     navigate("/dashboard");
    //     break;
    //   }
    // }
    // if (flag) {
    //     console.log(flag,"---flag----");
    //   setError(true);
    // }
  };
  return (
    <Container style={{ width: "40em", height: "40em" }}>
      <Form className="mb-3" onSubmit={submitLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            ref={usernameRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div>{error && <h1>wrong username...try Bret for example</h1>}</div>
    </Container>
  );
}

export default Login;
