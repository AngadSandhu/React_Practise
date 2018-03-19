import React from 'react';

const Person = (props) => {
    return (
        <div className="card">
            <h1>{props.name}</h1>
            <hr />
            <p>{props.title}</p>
            <p onClick={props.click}>{props.children}</p>
        </div>
    )
}

export default Person; 