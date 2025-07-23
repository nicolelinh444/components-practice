// define a functional component named "Button"
// props: text - displayed on the button, onClick - runs when the button is clicked
function Button ({text, onClick}) {
    // this return creates a button
    // makes the button show text passed in through the prop 
    return <button onClick={onClick}>{text}</button>
}

// export so that it can be used in other files
export default Button;