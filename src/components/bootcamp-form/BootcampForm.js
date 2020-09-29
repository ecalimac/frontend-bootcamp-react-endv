import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import "./bootcamp-form.css";

const BootcampForm = React.memo((props) => {
  const [bootcampName, setBootcampName] = useState("");
  const [bootcampDescription, setBootcampDescription] = useState("");
  const [bootcampEmail, setBootcampEmail] = useState("");
  const [bootcampPhone, setBootcampPhone] = useState("");
  const [bootcampWebsite, setBootcampWebsite] = useState("");

  useEffect(() => {
    console.log(
      bootcampDescription,
      bootcampName,
      bootcampPhone,
      bootcampEmail,
      bootcampWebsite,
      "Bootcamp form state"
    );
  });

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event, "submit event");
  };
  return (
    <div>
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              onChange={(event) => {
                setBootcampName(event.target.value);
              }}
              type="text"
              id="name"
            />
          </div>
          <div className="form-control">
            <label htmlFor="name">Description</label>
            <input
              onChange={(event) => {
                setBootcampDescription(event.target.value);
              }}
              type="text"
              id="description"
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              onChange={(event) => {
                setBootcampEmail(event.target.value);
              }}
              type="text"
              id="email"
            />
          </div>
          <div className="form-control">
            <label htmlFor="phone">Phone</label>
            <input
              onChange={(event) => {
                setBootcampPhone(event.target.value);
              }}
              type="text"
              id="phone"
            />
          </div>
          <div className="form-control">
            <label htmlFor="website">WebSite</label>
            <input
              onChange={(event) => {
                setBootcampWebsite(event.target.value);
              }}
              type="text"
              id="website"
            />
          </div>
          <div className="bootcamps-form__actions">
            <button type="submit">Add bootcamp</button>
          </div>
        </form>
      </Card>
    </div>
  );
});

export default BootcampForm;
