function FunctionEvent() {
    const handleClick = () => {
        console.log("button is clicked")
    }
    return (
        <div>
            function event
            <button onClick={handleClick}>  click</button>
        </div>
    )
}

export default FunctionEvent