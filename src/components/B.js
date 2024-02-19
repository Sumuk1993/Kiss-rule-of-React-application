import { C } from "./C";
import React from 'react'



export class B extends React.Component {
    fullname = "Rajkumar";
  
    //2. Constructor
    constructor(){
      super();
      this.address="Mysore";
    }
  
  
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