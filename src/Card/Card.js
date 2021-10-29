import {useState} from 'react'
import Again from './Again';

function Card(props) {

    const [buttonName, setButtonName] = useState({just : 'another', thing: "todo", asis: "isas"})
 
  const dummyData = {
    name: "aryan",
    age: 10,
    sex: "Male",
  };


  function thisIsTheChange() {
setButtonName({...buttonName, just : "anotheranoteh", thing: "todotodo", asis: "isasisas"})
props.thebutton('My name is sexy aryan agrawal')
  } 

  return (<div>
    <Again calling={props.again} />
       <button type="button" class="btn btn-primary" onClick={thisIsTheChange}>
      haha
    </button>
    <h2>{buttonName.just}</h2>
    <h2>{buttonName.thing}</h2>
    <h2>{buttonName.asis}</h2>
    <h1>{props.children}</h1>
  </div>
   
  );
}

export default Card;
