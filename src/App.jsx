import React from 'react'
import './app.css'
import PersonCard from './components/PersonCard.jsx';
import Button from './components/Button.jsx'
import AddImage from './components/Image.jsx'


function App() {
  function handleClick() { 
    console.log("Button clicked!"); 
  }
  
  return (
    <>
    <AddImage />
   <PersonCard name="Steve" age={35} occupation="Minecrafter" />
   <PersonCard name="Spongebob" age={25} occupation="Fry Cook" />
   <PersonCard name="Spiderman" age={30} occupation="Superhero" />
   <Button text="Click Here" onClick={handleClick} />
   <Button text="Click Me" onClick={handleClick}/>
   </>
  );
}

export default App;