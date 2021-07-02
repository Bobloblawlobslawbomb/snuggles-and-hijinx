import React from "react";

function Footer(props) {

  const myFunkyFooterStyles = {
    fontSize: '5px'
  }

  return (
    <div style={myFunkyFooterStyles}>
      <p><small>FAQs</small></p>
      <p><small>Contact Us</small></p>
      <p><small>Need a Store?</small></p>
    </div>
  )
}

export default Footer;