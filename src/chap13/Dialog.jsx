import React from "react";
import FancyBorder from "./FancyBorder";

export default function Dialog(props) {
  return (
    <FancyBorder>
      <h1>{props.title}</h1>
      <p>{props.message}</p>
      {props.children}
    </FancyBorder>
  );
}
