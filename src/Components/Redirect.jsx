import React from "react";
import { Link } from "react-router-dom";

const Redirect = () => {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "cursive",
          margin: "7rem",
          fontStyle: "italic",
          fontSize: '3rem'
        }}
      >
        Sorry, You are not authorized to view this page. Click{" "}
        <Link to="/Login" >here</Link> to login and view the page.
      </h1>
    </div>
  );
};

export default Redirect;
