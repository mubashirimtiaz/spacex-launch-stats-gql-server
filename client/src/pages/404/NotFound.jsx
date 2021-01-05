import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container my-5 py-5">
      <div className="row my-5 py-5">
        <div className="col-md-12 text-center">
          <p className="display-4">Not Found</p>
          <Link to="/">
            <button className="btn btn-secondary my-2">Go Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
