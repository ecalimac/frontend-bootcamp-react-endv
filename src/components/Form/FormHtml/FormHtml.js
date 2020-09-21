import React from "react";

const FormHtml = ({
  errors,
  touched,
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  errorsBeforeSubmit,
}) => {
  // const handleChange = (event) => {
  //   console.log(event, "event");
  // };
  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div>
          <label htmlFor="firstName">
            First name * :
            <input
              type="text"
              id="firstName"
              onBlur={handleBlur}
              onChange={handleChange}
              className="control"
              placeholder="Enter first name"
              value={values.firstName}
              name="firstName"
              required
            />
          </label>
          {(touched.firstName || errorsBeforeSubmit.firstName) &&
            errors.firstName}
        </div>

        <div>
          <label htmlFor="lastName">
            Last name * :
            <input
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              id="lastName"
              className="control"
              placeholder="Enter last name"
              value={values.lastName}
              name="lastName"
              required
            />
          </label>
          {(touched.lastName || errorsBeforeSubmit.lastName) && errors.lastName}
        </div>
        <div>
          <label htmlFor="email">
            Email address * :
            <input
              type="text"
              className="control"
              onChange={handleChange}
              onBlur={handleBlur}
              id="email"
              value={values.email}
              placeholder="Please enter email"
              name="email"
              required
            />
          </label>
          {(touched.email || errorsBeforeSubmit.email) && errors.email}
        </div>
        <div>
          <label htmlFor="age">
            Age * :
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              type="number"
              className="control"
              id="age"
              placeholder="Enter age"
              value={values.age}
              name="age"
              min="0"
              required
            />
          </label>

          {(touched.age || errorsBeforeSubmit.age) && errors.age}
        </div>

        <div style={{ marginTop: 30 }}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormHtml;
