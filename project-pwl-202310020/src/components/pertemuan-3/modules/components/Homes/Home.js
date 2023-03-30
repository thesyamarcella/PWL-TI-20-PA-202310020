import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";

const Homes = () => {
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  if (!authenticated) {
  // Redirect
  } else {
    return (
  <div className='container'>
  <h1>Hello this is a HOME page</h1>
  <p className="text-center">
    Clik <Link to="/profile">here</Link> to access the profile page.
  </p>
</div>
    );
  }
};

export default Homes;