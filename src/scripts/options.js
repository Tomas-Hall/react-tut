import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "../css/options.css";

export default class OptionsBox extends Component {
    render() {
        return (
            <div>
                <p>Below is where the table should be</p>
                <table className="Option-bar" >
                    <tbody>
                    <tr >
                        <td><a className="Option-inner" href="Home" data-id="rawr">Home</a></td>
                        <td><a className="Option-inner" href="API" data-id="rawr" >API</a></td>
                        <td><a className="Option-inner" href="About" data-id="rawr" >About</a></td>
                    </tr>
                    </tbody>
                </table>
                <div >
                    <a href="Home" data-id="rawr">Home</a>
                </div>

            </div>
        );
    };
}

ReactDOM.render(
    <OptionsBox />,
    document.getElementById('root')
);

function someFunc() {
    console.log("Success!");
}