import { useState } from "react"
import Counter from "./DState"
import FunctionCounter from "./HookFunCounter"

export default function ConditionalComponent() {

    const [display, setDisplay] = useState(false) //true
    if (display) {
        return (
            <div>
                <h6>This is a conditional component </h6>
                <Counter></Counter>
            </div>
        )
    }
    else {
        return (<div>
            <h6> Nothing to see here</h6>
            <FunctionCounter></FunctionCounter>
        </div>
        )
    }
}