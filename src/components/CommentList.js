import React from "react";
import Posts from "./Posts";

const emailChopper = (str)=>{
  let idx = str.indexOf("@")
  // console.log(idx,"---");
  let result = str.split('').slice(0,idx).join('')
  return result;
}
function CommentList(props) {
  console.log(props.comment, "----props komen");
  return (
    <>
      {props.comment.map((el, idx) => {
        return (<>
        <h4>{emailChopper(el.email)}</h4>
          <p key={idx}>{el.body}</p>
        </>);
      })}
    </>
  );
}

export default CommentList;
