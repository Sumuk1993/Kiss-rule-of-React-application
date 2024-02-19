

export let C=(props)=>{

    let firstname="Mohan";
    console.log("Hi",props); 
    return <span>{firstname} {props.children}</span>  
  }