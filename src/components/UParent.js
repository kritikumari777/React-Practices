import { useState } from 'react';
import Child from "./VChild";

export default function Parent() {

    const [parentcount, setParentCount] = useState(0)

    const [childcount, setChildCount] = useState(0)

    const changeParentCount = () => {
        setParentCount(parentcount + 1)
    }

    const changeChildCount = () => {
        setChildCount(childcount + 1)
    }

    return (
        <div>This is a Parent component
            <h1> Parent Count is {parentcount}</h1>
            <Child count={childcount}></Child>
            <button onClick={changeParentCount} >Increment parent count</button>
            <button onClick={changeChildCount} >Increment child count</button>
            <h6> Memos restrict to not rerander the Child class</h6>
            <h6>so that if we do any change in parent then its not reflacted to child</h6>
        </div>
    )
}