import React from "react";
import PropTypes from "prop-types";

function Keg(props) {

  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
      <h3>Keg name: {props.name}</h3>
      <h3>Keg brand: {props.brand}</h3>
      <h3>Keg price:{props.price}</h3>
      <h3>Keg's Alcohol Content:{props.alcoholContent}</h3>
      <h3>Description: {props.description}</h3>
      <h3>Pints Remaining in Keg: {props.numOfPints}</h3>
      <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string,
  alcoholContent: PropTypes.string.isRequired,
  numOfPints: PropTypes.number,
  description: PropTypes.string,
  whenKegClicked: PropTypes.func
}

export default Keg;