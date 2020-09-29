import React, { useCallback, useEffect, useState } from "react";
import BootcampForm from "../bootcamp-form/BootcampForm";
import BootcampsList from "../bootcamps-list/BootcampsList";
import ErrorModal from "../error-modal/ErrorModal";
import Search from "../search/Search";

const BootcampsRouteComponent = () => {
  const [bootcamps, setBootcamps] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

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
  //Nota: [empty] dat ca dependinta la useEffect face ca useEffect sa se comporte ca si componentDidMount
  const addBootcamp = (bootcamp) => {
    setIsLoading(true);
    fetch("https://bootcamp-a8786.firebaseio.com/bootcamps.json", {
      method: "POST",
      body: JSON.stringify(bootcamp),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setIsLoading(false);
        return response.json()
      })
      .then((data) => {
        // console.log(data);
        setBootcamps((bootcamps) => [
          ...bootcamps,
          { ...bootcamp, id: data.name },
        ]);
      });
  };


  // const onSearchHandler = (filteredBootcamps) => {
  //   setBootcamps(filteredBootcamps);
  // };
  const onSearchHandler = useCallback((filteredBootcamps) => {
    setBootcamps(filteredBootcamps);
  }, []);

  const onRemoveBootcamp = (id) => {
    setIsLoading(true);
    fetch(`https://bootcamp-a8786.firebaseio.com/bootcamps/${id}.json`, {
      method: "DELETE",
    }).then((response) => {
      setIsLoading(false);
      // console.log(response, "delete response");
      setBootcamps((prevBootcamp) =>
        prevBootcamp.filter((bootcamp) => bootcamp.id !== id)
      );
    }).catch((error) => {
      setIsLoading(false);
      console.log(error, "eroare");
      setError("Something went wrong");
    });
  }
  const clearError = () => {
    setError(null)
  }

  return (
    <div>
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <BootcampForm loading={isLoading} onAddBootcamp={addBootcamp} />
      <Search onSearchBootcampLoaded={onSearchHandler} />
      <BootcampsList bootcamps={bootcamps} onRemoveBootcamp={onRemoveBootcamp} />
    </div>
  );
};
export default BootcampsRouteComponent;
