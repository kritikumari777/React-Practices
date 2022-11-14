import { Component } from "react";

class Counter extends Component {

    constructor() {
        super()
        this.state = { counter: 0, }

        // second way
        // this.increment = this.increment.bind(this)

    }
    increment = () => {   // third way
        this.setState({
            counter: this.state.counter + 1,
        })
    }

    render() {
        return <div>
            <h6>its a state and counter :{this.state.counter} </h6>
            <button onClick={this.increment}>click hare to increment</button>
        </div>
    }
}

export default Counter

// fast way
// <button onClick={() => this.increment()}>click hare to increment</button>