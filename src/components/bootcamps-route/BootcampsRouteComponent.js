import React from "react";
import BootcampForm from "../bootcamp-form/BootcampForm";
import BootcampsList from "../bootcamps-list/BootcampsList";
import Search from "../search/Search";

const BootcampsRouteComponent = () => {
  return (
    <div>
      <BootcampForm />
      <Search />
      <BootcampsList />
    </div>
  );
};
export default BootcampsRouteComponent;
