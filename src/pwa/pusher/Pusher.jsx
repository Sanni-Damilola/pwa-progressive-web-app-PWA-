import React from "react";
import { Link } from "react-router-dom";

const Pusher = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>Pusher</p>
      <Link
        style={{ position: "absolute", top: "50px", right: "50px" }}
        to={-1}
      >
        <button>go back</button>
      </Link>
    </div>
  );
};

export default Pusher;
