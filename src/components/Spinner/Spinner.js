import React, { Fragment } from "react";
import spinner from "../../spinner.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        style={{ width: "200px", display: "block", margin: "auto" }}
        alt="spinner"
      />
    </Fragment>
  );
};

export default Spinner;
