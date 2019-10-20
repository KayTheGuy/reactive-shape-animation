
import React, { Component } from 'react';

class DataFetcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "numbers": []
        }
    }

    async componentDidMount() {
        this.setState({ numbers: [] });

        // const response = await fetch('http://localhost:3000/number');
        // console.log(response);
        // const socket = new WebSocket('ws://localhost:3000/number');
        // socket.addEventListener('message', async (event) => {
        //     const profile = JSON.parse(event.data);
        //     this.state.numbers.push(profile);
        //     console.log(event);
        //     this.setState({ numbers: this.state.numbers });
        // });
    }

    render() {
        return (<ul>
            {
                this.state.numbers.map(function (num, idx) {
                    return (<li key={idx}>{num}</li>)
                })
            }
        </ul>);
    }
}

export default DataFetcher;