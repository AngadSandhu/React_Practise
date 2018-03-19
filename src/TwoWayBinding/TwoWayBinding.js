import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TwoWayBinding = (props) =>{
    return (
        <div >
            <span>Enter Name</span>
            <input  onChange={props.change} type="text" className="form-control"  value={props.name}/>
            <br/>
            <h5>{props.name}</h5>
        </div>
    );
}

export default TwoWayBinding;