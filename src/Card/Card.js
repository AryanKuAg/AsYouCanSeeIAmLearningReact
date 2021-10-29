import {useState} from 'react'


function Card(props) {
    const [buttonName, setButtonName] = useState('Press')
 
    
  const dummyData = {
    name: "aryan",
    age: 10,
    sex: "Male",
  };
  return (
    <button type="button" class="btn btn-primary" onClick={() => {setButtonName('Aryan')}}>
      {buttonName}
    </button>
  );
}

export default Card;
