import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

function Profile() {
  const profile = useSelector((state) => state.allReducers.user);

  useEffect(() => {
      // console.log(profile,"---profile");
  });
  return (
    <>
      <Navbar/>
      <h2>Username : {profile.name}</h2>
      <h2>Email : {profile.email}</h2>
      <h2>Address : {`${profile.address.street} ${profile.address.suite} ${profile.address.city} ${profile.address.zipcode}`}</h2>
      <h2>Phone : {profile.phone}</h2>
    </>
  );
}

export default Profile;