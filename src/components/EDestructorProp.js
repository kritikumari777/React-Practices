
import { Component } from "react"
class Resume extends Component {
    render() {
        const { name } = this.props
        return <h6> this ia a class component {name}</h6>
    }
}
export default Resume