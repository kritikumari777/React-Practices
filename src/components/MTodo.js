import { useState } from "react"
import { TouchList } from "react"
import ListItem from "./NListItem"
export default function Todo() {

    const [todo, setTodo] = useState("")
    const [todoList, setTosoList] = useState([])

    const handleChange = (event) => {
        setTodo(event.target.value)
        console.log(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let tempList = todoList
        tempList.push(todo)
        setTosoList(tempList)
        console.log(todoList)
        setTodo("")
    }

    return (<div>TODO
        <form onSubmit={handleSubmit}>
            <input value={todo} onChange={handleChange} type="text"></input>
            <button type="Submit">Add</button>
        </form>

        {todoList.map((item) => (
            <ListItem key={item} name={item}></ListItem>
        ))}
    </div>)
}