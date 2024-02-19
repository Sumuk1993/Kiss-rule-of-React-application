import React from "react";
import ReactDOM from "react-dom/client";
import { A } from "./components/A";

//we have define components in 2 techinque
//1.fuction definition area



//2.class component
/*class B extends React.Component{
1.properties

2.constructor

3.method
}*/




const root = ReactDOM.createRoot(document.getElementById("root"));

let sn = "Kashyap";
root.render(
  <span>
    Welcome to <A mname={sn} />
  </span>
);
