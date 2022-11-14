import { useState } from "react"
function FunctionCounter() {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }
    return <div>
        <div>Counter Value: {counter}
            <button onClick={increment}>Increge</button>
            <button onClick={decrement}>Decrege</button>
        </div>

    </div>
}

export default FunctionCounter