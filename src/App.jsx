import React from 'react'
import './app.css'
import PersonCard from './components/PersonCard.jsx';
import Button from './components/Button.jsx'
import AddImage from './components/Image.jsx'


// wraps around the entire app
function App() {
  // message will log to the console when user clicks button
  function handleClick() { 
    console.log("Button clicked!"); 
  }
  
  return (
    <>
   {/* image added */}
    <AddImage />
    {/* adds values to each card */}
   <PersonCard name="Steve" age={35} occupation="Minecrafter" />
   <PersonCard name="Spongebob" age={25} occupation="Fry Cook" />
   <PersonCard name="Spiderman" age={30} occupation="Superhero" />
   {/* adds buttons  */}
   <Button text="Click Here" onClick={handleClick} />
   <Button text="Click Me" onClick={handleClick}/>
   </>
  );
}

export default App;