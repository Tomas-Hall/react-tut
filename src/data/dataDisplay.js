import React, { Component } from 'react';
import Data from './data.js';

class DataDisplay extends Component {
    state = {
        dataList: [
            {
                id: 0,
                name: "Steve",
                age: 24
            },
            {
                id: 1,
                name: "XxhackermanxX",
                age: 1337
            },
            {
                id: 2,
                name: "uwotbruv",
                age: 9001
            }
        ],
        showData: false
    }

    propertyChangedHandler = (event, id) => {
        const dataIndex = this.state.dataList.findIndex(p => {
            return p.id === id;
        });


        const data = {
            ...this.state.dataList[dataIndex]
        };

        data[event.target.id] = event.target.value;
        
        const dataList = [...this.state.dataList];
        dataList[dataIndex] = data;
        this.setState({ dataList: dataList });
    }

    deleteDataHandler = (dataIndex) => {
        const dataList = [...this.state.dataList];
        dataList.splice(dataIndex, 1);

        this.setState({ dataList: dataList });
    }

    toggleDataHandler = () => {
        const doesShow = this.state.showData;

        this.setState({
            showData: !doesShow
        });
    }

    render() {
        let dataList = null;
        if (this.state.showData) {
            dataList = (
                <div>
                    {this.state.dataList.map((data, index) => {
                        return <Data
                            click={() => this.deleteDataHandler(index)}
                            name={data.name}
                            age={data.age}
                            key={data.id}
                            changed={(event) => this.propertyChangedHandler(event, data.id)}
                        />
                    })}
                </div>
            );
        }

        return (
            <div>
                <h1>Hi, you suck. Sincerely me.</h1>
                <button onClick={this.toggleDataHandler}>Toggle Data</button>
                {dataList}
            </div>
        );
    }
}

export default DataDisplay;