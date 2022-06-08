import React, { useEffect, useState } from "react";
import Comments from "./Comments";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Posts(props) {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((data) => {
        let temp = data.filter((el, idx)=>{
          return el.userId === props.id;
        })
        setPosts(temp);
      });
  }, []);

  const toDetail = (id)=>{
    // e.preventDefault();
      console.log(id,"target params");
    navigate(`/detail/${id}`)
  }
  return (
    <>
      {posts.map((el, idx) => {
        return (
          <Card style={{ width: "18rem", marginTop: "1em" }} key={idx}>
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>{el.title}</Card.Text>
              <Comments id={el.id} />
              <Card.Link href="" onClick={()=>{return toDetail(el.id)}} value={el.id}>detail</Card.Link>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default Posts;
