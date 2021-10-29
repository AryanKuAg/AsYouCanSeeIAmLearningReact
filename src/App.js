import { useState } from 'react'
import Card from './Card/Card'
import Formmm from './Card/Formmm'


function App(){
    const [the, setThe] = useState('the')
    const buttonHandler = (some) => {
        console.log('press the button get some', some)
    }

    const textChange = (text) =>{
            setThe(text)
    }
    
    return <div>
        <p>{the}</p>
        <h1>Hey its aryan and this is my website</h1>
        <Card mydata="kkkkkkkkkkkkkkkkkkkkkkkkkk" thebutton={buttonHandler} again={textChange}>Cchildre</Card>
        <Formmm />
    </div>
}

export default App