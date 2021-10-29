import Card from './Card/Card'


function App(){
    const buttonHandler = () => {
        console.log('press the button')
    }
    
    return <div>
        <h1>Hey its aryan and this is my website</h1>
        <Card mydata="kkkkkkkkkkkkkkkkkkkkkkkkkk" thebutton={buttonHandler}/>
    </div>
}

export default App