import { Component } from "react"

class Form extends Component {


    state = {
        firstname: "",
        lastname: "",
    }

    fistHandleChange = (event) => {
        this.setState({
            firstname: event.target.value,
        })
    }

    lastHandleChange = (event) => {
        this.setState({
            lastname: event.target.value,
        })
    }

    hendleSubmit = (event) => {
        event.preventDefault()
        console.log({
            fname: this.state.firstname,
            lname: this.state.lastname,
        })
    }
    render() {
        return (<div>
            <h6>Form</h6>
            <form onSubmit={this.hendleSubmit}>
                firstname <input onChange={this.fistHandleChange} type="text" value={this.state.firstname}></input>
                lastname  <input onChange={this.lastHandleChange} type="text" value={this.state.lastname}></input>
                <div> <button type="submit" >Submit</button> </div>
            </form>
        </div>)
    }
}

export default Form