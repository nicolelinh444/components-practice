function PersonCard({name, age, occupation}) {
return (
    // creates card to fill out for each person
    <div>
    <h2>{name}</h2>
    <p>Age: {age}</p>
    <p>Occupation: {occupation}</p>
    </div>
);
}

export default PersonCard;