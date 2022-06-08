import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import DB_POSTS from "../posts.json";
import { Pagination } from "react-bootstrap";
import Posts from "../components/Posts";

function Dashboard() {
  let paginationArr = [1, 2, 3];
  const location = useLocation();
  const [user, setUser] = useState([]);
  const [paginationNumber, setPaginationNumber] = useState(paginationArr);
  const [allData, setAllData] = useState([]);
  const [posts, setPosts] = useState([]);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    // ---------------------------FETCH DATA USERS TO JSON PLACEHOLDER--------------------------
    let dataCombine = [];
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  //   ----------------------------------FUNCTION PAGINATION--------------------------------------
  const firstPagination = () => {
    setPaginationNumber(paginationArr);
  };
  const lastPagination = (e) => {
    let limit = user.length;
    let result = [];
    for (let i = limit; i > limit - 3; i--) {
      result.push(i);
    }
    setPaginationNumber(result.reverse());
  };
  const movePaginationDown = () => {
    if (paginationNumber[0] !== 1) {
      let newData = paginationNumber.map((el) => {
        return el - 1;
      });
      setPaginationNumber(newData);
    }
  };
  const movePaginationUP = (e) => {
    let limit = user.length;
    if (paginationNumber[paginationNumber.length - 1] !== limit) {
      let newData = paginationNumber.map((el) => {
        return el + 1;
      });
      setPaginationNumber(newData);
    }
  };
  const resetPost = (e) => {
    let page = +e.target.text;
    let start = page * 10;
    let end = start + 10;
    let newData = allData.slice(start, end);
    setActivePage(page);
    setPosts(newData);
  };
  //   ----------------------------------RENDERING--------------------------------------
  return (
    <>
      <Navbar />
      <div>
        {user.map((el, idx) => {
          if (idx === (activePage-1)){
            return (
              <div key={idx}>
                <Posts id={el.id} name={el.username} />
              </div>
            );
          }
        })}
      </div>
      {/* PAGINATION */}
      <Pagination>
        <Pagination.First onClick={firstPagination} />
        <Pagination.Prev onClick={movePaginationDown} />
        {paginationNumber.map((el, idx) => {
          return (
            <Pagination.Item key={idx} onClick={resetPost}>
              {el}
            </Pagination.Item>
          );
        })}
        <Pagination.Next onClick={movePaginationUP} />
        <Pagination.Last onClick={lastPagination} />
      </Pagination>
    </>
  );
}

export default Dashboard;
