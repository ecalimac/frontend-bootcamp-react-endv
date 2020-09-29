import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <Link to="/">Bootcamps - hooks version</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
