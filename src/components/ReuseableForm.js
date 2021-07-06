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
        <br/>
        <input
          type="text"
          name="brand"
          placeholder="Keg Brand" />
        <br/>
        <input
          type="text"
          name="price"
          placeholder="Price of a Pint" />
        <br/>
        <input
          type="text"
          name="alcoholContent"
          placeholder="Keg Alcohol Content" />
        <br/>
        <textarea
          name="description"
          placeholder="Keg Description" />
        <br/>
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