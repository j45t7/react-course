import React from 'react';
import './Person.css'


const Person = (props) => {
    const styles = {
        backgroundColor: 'white',
        font: 'inherit',
        border:'1px solid blue',
        padding: '8px',
        cursor: 'text'
      }; 

    return(
        <div className="Person">
        <p>I'm a {props.name} and I'm {props.age} years old.</p>
        <p>{props.children}</p>
        <input style={styles} text="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default Person;