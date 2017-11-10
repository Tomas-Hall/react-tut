import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Test extends Component {
    render() {
        return (
            <div>
                <p>now <b>This</b> is a test</p>
                ...Box<input type="text" id="raw" /><br />
                ...Button <button>Submit</button>
            </div>
        );
    };
}

ReactDOM.render(
    <Test />,
    document.getElementById('root')
);