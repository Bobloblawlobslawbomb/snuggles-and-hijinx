import React from "react";
import dummyImage from "./../img/coolColors.jpg";

function Header(props) {
  const myFunkyStyles = {
    height: '40vh',
    width: 'auto',
    maxWidth: '100%',
    backgroundSize: 'cover',
    textAlign: 'center'
  }

  return (
    <div style={myFunkyStyles}>
      <h1>Snuggles and Hijinx</h1>
      <img src={dummyImage} alt="bold swathes of colors" />
    </div>
  );
}

export default Header;