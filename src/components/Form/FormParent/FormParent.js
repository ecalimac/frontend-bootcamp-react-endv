import React from "react";
import FormValidation from "../FormValidation/FormValidation";

const nameValidation = (fieldName, fieldValue) => {
  if (fieldValue.trim() === "") {
    return `${fieldName} is required`;
  }
  if (/[^a-zA-Z -]/.test(fieldValue)) {
    return "Invalid characters";
  }
  if (fieldValue.trim().length < 3) {
    return `${fieldName} needs to be at least three characters`;
  }

  return null;
};

const emailValidation = (email) => {
  if (
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return null;
  }
  if (email.trim() === "") {
    return "Email is required";
  }

  return "Please enter a valid email";
};

const ageValidation = (age) => {
  if (!age) {
    return "Age is required";
  }
  if (age < 18) {
    return "Age must be at least 18!!";
  }

  if (age > 99) {
    return "Age must be under 99";
  }

  return null;
};

const validate = {
  firstName: (name) => nameValidation("First Name", name),
  lastName: (name) => nameValidation("Last Name", name),
  email: emailValidation,
  age: ageValidation,
};

const initialValues = {
  firstName: "Ana5",
  lastName: "Popescu",
  age: 5,
  email: "andraa",
};

const FormParent = () => {
  return (
    <div>
      <FormValidation validate={validate} initialValues={initialValues} />
    </div>
  );
};

export default FormParent;
