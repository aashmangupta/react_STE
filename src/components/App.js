import React from "react"
import ToDoItem from "./ToDoItem"

const styles = {
    color: "#FF8C00",
    backgroundColor: "#FF2D00",
    fontSize: 42
}

function App() {
    return(
        <div className="todo-list">
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
        </div>
    )
}

export default App;