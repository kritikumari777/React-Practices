import { Component } from "react";
class Message extends Component {

    render() {
        return <h6> It's a class component massage:
            {this.props.messagecontent}
        </h6>
    }

}

export default Message
