 // creates card to fill out for each person
function PersonCard({name, age, occupation}) {
return (
     // props for name, age, and occupation
    <div>
    <h2>{name}</h2>
    <p>Age: {age}</p>
    <p>Occupation: {occupation}</p>
    </div>
);
}

// export so that it can be used in other files
export default PersonCard;