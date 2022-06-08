import React, {useEffect, useState} from "react";
import { FaDiscourse } from "react-icons/fa";

function Comments(props) {
  const [comments, setComments] = useState(0)
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}/comments`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data.length);
      });
  }, []);
   const toDetail = ()=>{

   }
  return (
    <>
      <FaDiscourse />
      {comments}
    </>
  );
}

export default Comments;
