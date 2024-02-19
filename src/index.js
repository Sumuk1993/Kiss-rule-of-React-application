import React from "react";
import ReactDOM from "react-dom/client";

//we have define components in 2 techinque
//1.fuction definition area

function A(props) {
  let fname = "Suraj";
  let ab = "Gupta";
  //every function return something
  return (
      <span>
        {fname} {props.mname} and <B lastname={ab} />
      </span>
  );
}

//2.class component
/*class B extends React.Component{
1.properties

2.constructor

3.method
}*/
class B extends React.Component {
  fullname = "Rajkumar";

  //2. Constructor
  // constructor(){
  //   super();
  //   this.address="Mysore";
  // }


  //3.method
  render() {
    //every fuction return somthing
    return (
      <span>
        {this.fullname} {this.props.lastname} <C>Advani</C> from {this.address}
      </span>
    );
  }
}

let C=(props)=>{

  let firstname="Mohan";
  console.log("Hi",props); 
  return <span>{firstname} {props.children}</span>  
}

const root = ReactDOM.createRoot(document.getElementById("root"));

let sn = "Kashyap";
root.render(
  <span>
    Welcome to <A mname={sn} />
  </span>
);
