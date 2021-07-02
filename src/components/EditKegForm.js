import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditKegForm (props) {
  const { keg } = props;

  function handleEditTicketFormSubmission(e) {
    e.preventDeafault();
    props.onEditKeg({
      name: e.target.name.value,
      brand: e.target.brand.value,
      price:e.target.price.value,
      alcoholContent:e.target.alcoholContent.value,
      description: e.target.description.value,
      id: keg.id
    })
  }

  return (
    <React.Fragment>
      <ReusableForm 
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