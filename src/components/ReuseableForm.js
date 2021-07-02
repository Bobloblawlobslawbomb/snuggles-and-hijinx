import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>

        <input
          type="text"
          name="name"
          placeholder="Keg Name" />
        <hr/>
        <input
          type="text"
          name="brand"
          placeholder="Keg Brand" />
        <hr/>
        <input
          type="text"
          name="price"
          placeholder="Price of a Pint" />
        <hr/>
        <input
          type="text"
          name="alcoholContent"
          placeholder="Keg Alcohol Content" />
        <hr/>
        <textarea
          type="text"
          name="description"
          placeholder="Keg Description" />
        <button type="submit">{props.buttonText}</button>
        <hr/>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;