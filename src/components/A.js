
import {B} from "./B";

export function A(props) {
    let fname = "Suraj";
    let ab = "Gupta";
    //every function return something
    return (
        <span>
          {fname} {props.mname} and <B lastname={ab} />
        </span>
    );
  }