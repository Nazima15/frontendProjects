import React from "react";

function FancyBorder(props) {
  return (
    <div style={{
      border: "3px solid blue",
      padding: "20px",
      borderRadius: "10px",
      display: "inline-block"
    }}>
      {props.children}
    </div>
  );
}

export default FancyBorder;
