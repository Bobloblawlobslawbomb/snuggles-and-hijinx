import React from "react";
import PropTypes from "prop-types";
import ReuseableForm from "./ReuseableForm";

function EditKegForm (props) {
  const { keg } = props;

  function handleEditKegFormSubmission(e) {
    e.preventDeafault();
    props.onEditKeg({
      name: e.target.name.value,
      brand: e.target.brand.value,
      price:e.target.price.value,
      alcoholContent:e.target.alcoholContent.value,
      description: e.target.description.value,
      numOfPints: parseInt(e.target.numOfPints.value),
      id: keg.id
    })
  }

  return (
    <React.Fragment>
      <ReuseableForm 
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="Update Keg" />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func
};

export default EditKegForm;