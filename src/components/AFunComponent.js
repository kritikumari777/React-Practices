const name = "It's A Function Component";
const displayMessage = () => {
    return "its a single line function"
}
export function Hello() {
    return <h6> Hello World! {name} {displayMessage()} </h6>
}

