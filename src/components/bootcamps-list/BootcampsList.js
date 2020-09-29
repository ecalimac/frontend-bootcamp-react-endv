import React from "react";

const BootcampsList = (props) => {
  return (
    <section>
      <h1>Bootcamps Loaded</h1>
      <ul>
        {props.bootcamps.map(bootcamp => (
          // <li key={bootcamp.id} onClick={e => props.onRemoveBootcamp(bootcamp.id, e)}>
          <li key={bootcamp.id} onClick={props.onRemoveBootcamp.bind(this, bootcamp.id)}>
            {bootcamp.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BootcampsList;
