import React, { useEffect, useState } from "react";
import BootcampForm from "../bootcamp-form/BootcampForm";
import BootcampsList from "../bootcamps-list/BootcampsList";
import Search from "../search/Search";

const BootcampsRouteComponent = () => {
  const [bootcamps, setBootcamps] = useState([]);

  useEffect(() => {
    fetch("https://bootcamp-a8786.firebaseio.com/bootcamps.json")
      .then((response) => response.json())
      .then((data) => {
        const bootcampsFromServer = [];
        for (const key in data) {
          bootcampsFromServer.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            website: data[key].website,
            phone: data[key].phone,
            email: data[key].email,
          });
        }
        console.log(bootcampsFromServer, "bootcamps");
        // fara al doilea parametru([])urla browserul ca intra intr-un state infinit
        // la fel urla si daca le punem direct in componenta (fara sa folosim use State)
        setBootcamps(bootcampsFromServer);
      });
  }, []);
  //Nota: [] gol dat ca dependinta la useEffect face ca useEffect sa se comporte ca si componentDidMount
  return (
    <div>
      <BootcampForm />
      <Search />
      <BootcampsList bootcamps={bootcamps} />
    </div>
  );
};
export default BootcampsRouteComponent;