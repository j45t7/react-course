import React from 'react';


const Person = (props) => {
    return(
        <div>
        <p>I'm a {props.name} and I'm {props.age} years old.</p>
        <p>{props.children}</p>
        <input text="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default Person;