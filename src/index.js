import React from "react";
import ReactDOM from "react-dom/client";
//import LandingPage from "./ch09/LandingPage";
//import MainPage from "./ch09/MainPage";
//import AttendanceBook from "./chap10/AttendanceBook";
import NameForm from "./chap11/NameForm";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const numbers=[1,2,3,4,5];
// const listItems = numbers.map((n) =><li>{n}</li>);
root.render(<input type="text" value="hi" />);

setTimeout(() => {
  root.render(<input type="text" />);
}, 1000);
