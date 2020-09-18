import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <Link to="/">Bootcamps Class Component</Link>
        </li>
        <li>
          <Link to="/bootcamps/add">Add new bootcamp</Link>
        </li>
        {/* <li>
          <Link to="/bootcamps-with-hooks">
            Bootcamps - Functional Component
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Navigation;
