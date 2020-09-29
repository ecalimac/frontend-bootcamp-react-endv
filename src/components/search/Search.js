import React, { useEffect, useRef, useState } from "react";
import Card from "../card/Card";
import './search.css';

const Search = React.memo((props) => {
  const { onSearchBootcampLoaded } = props;
  const [searchField, setSearchField] = useState("");

  // folosim useRef cand vrem sa avem o referinta la valoarea din input
  const inputRef = useRef();

  //V2 - we use setTimeout and useRef to send the bootcamp to the parent Component after a 5ms, not after each letter typing
  useEffect(() => {
    console.log("search effect");
    const timer = setTimeout(() => {
      if (searchField === inputRef.current.value) {
        const query =
          searchField.length === 0
            ? ""
            : `?orderBy="name"&equalTo="${searchField}"`;
        fetch("https://bootcamp-a8786.firebaseio.com/bootcamps.json" + query)
          .then((reponse) => reponse.json())
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
            onSearchBootcampLoaded(bootcampsFromServer);
          });
      }
    }, 500);


    //V1
    // console.log(searchField, 'state');
    // const query = searchField.length === 0 ? '' : `?orderBy="name"&equalTo="${searchField}"`;
    // fetch('https://bootcamp-a8786.firebaseio.com/bootcamps.json' + query).then(
    //     reponse => reponse.json()
    // ).then(data => {
    //     console.log(data, 'searchBootcamps');
    //     const bootcamps = [];
    //      for(const key in data) {
    //          bootcamps.push({
    //              id: key,
    //              name: data[key].name,
    //              description: data[key].description,
    //              website: data[key].website,
    //              phone: data[key].phone,
    //              email: data[key].email

    //          });
    //      }
    //      onSearchBootcampLoaded(bootcamps);

    // })
    return () => {
      clearTimeout(timer);
    };
  }, [onSearchBootcampLoaded, searchField]);

  return <Card>
    <div className="search-input">
      <label>Filter by name</label>
      <input
        ref={inputRef}
        onChange={(e) => setSearchField(e.target.value)}
        type="text"
      />
    </div>
  </Card>;
});
export default Search;
