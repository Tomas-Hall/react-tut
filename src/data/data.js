import React from 'react';

const data = (props) => {
    return (
        <div className="data">
            <p> I'm {props.name} and I am {props.age} </p>
            <input type="text" id="name" onChange={props.changed} value={props.name} />
            <br />
            <input type="number" id="age" onChange={props.changed} value={props.age} />
        </div>

    )


};

export default data;