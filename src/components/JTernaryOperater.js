import { useState } from "react";
import Counter from "./DState";
import FunctionCounter from "./HookFunCounter";

export default function TernaryOperater() {
    const [display, setDisplay] = useState(true)

    return display ?
        (<h6>Ternary Operater</h6>) : <FunctionCounter></FunctionCounter>;
}