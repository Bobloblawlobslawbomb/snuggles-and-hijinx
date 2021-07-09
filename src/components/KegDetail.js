import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg, onClickingDelete, onClickingEdit } = props;

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>Name of Keg: {keg.name}</h3>
      <h3>Brand of Keg: {keg.brand}</h3>
      <h3>Price of Keg: {keg.price}</h3>
      <h3>ABV of Keg: {keg.alcoholContent}</h3>
      <h3>Keg description: {keg.description}</h3>
      <h3>Number of Pints left in keg: {keg.numOfPints}</h3>
      {keg.numOfPints === 0
        ? <h3>Sorry this keg is empty!</h3>
        : <h3>{keg.numOfPints}</h3>}
      {keg.numOfPints > 0 
        ? <button onClick={props.onClickingBuyPint}>Buy a Pint</button>
        : <button onClick={props.onClickingRefill}>Refill Keg</button>}
      <button onClick={ onClickingEdit }>Update Keg</button>
      <button onClick={() => onClickingDelete(keg.id)}>Delete Keg</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;