import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReuseableForm from "./ReuseableForm";

function NewKegForm(props) {
  function handleNewKegFormSubmission(e) {
    e.preventDefault();
    props.onNewKegCreation({
      name: e.target.name.value,
      brand: e.target.brand.value,
      price:e.target.price.value,
      alcoholContent:e.target.alcoholContent.value,
      numOfPints: parseInt(e.target.numOfPints.value),
      description: e.target.description.value,
      id: v4()
    });
  };

  return (
    <React.Fragment>
      <ReuseableForm
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="Add new Keg" />
    </React.Fragment>
  );
};

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;