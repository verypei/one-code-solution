import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import CommentList from "../components/CommentList";
import { FaDiscourse } from "react-icons/fa";
import Navbar from "../components/Navbar";

function DetailPost() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [postData, setPostData] = useState({});
  const [comments, setComments] = useState([]);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPostData(data);
      });

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "----data komen2-----");
        setComments(data);
      });
  }, []);

  const showComment = () => {
    console.log("masuk show comment", flag);
    setFlag((prev) => !prev);
  };
  return (
    <>
      <Navbar />
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{postData.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {user.username}
          </Card.Subtitle>
          <Card.Text>{postData.body}</Card.Text>
          <FaDiscourse onClick={showComment} />
          {flag ? (
            <>
              <h3>All Comment</h3>
              <CommentList comment={comments} />
            </>
          ) : (
            comments.length
          )}
        </Card.Body>
      </Card>
    </>
  );
}

export default DetailPost;
