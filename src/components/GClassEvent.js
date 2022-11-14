import { Component } from "react"

class ClassEvent extends Component {

    hendelClick = () => {
        console.log("button is clicked")
    }
    render() {
        return <div>
            this is a class based component
            <button onClick={this.hendelClick}>   click</button>
        </div>

    }
}

export default ClassEvent