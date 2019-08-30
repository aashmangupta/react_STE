import React from "react"
import ToDoItem from "./ToDoItem"
import todosData from "./todosData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            data: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedData = this.state.data.map(task => {
                if(task.id === id) {
                    task.completed = !task.completed
                }
                return task;
            })
            return {data: updatedData}
        })
    }

    render() {
        const todoItems = this.state.data.map(item => <ToDoItem key={item.id} item={item} func={this.handleChange}/>)
        return (
            <div className="todo-list">
                <form>
                    <input type="text" placeholder="Enter task"/>
                    <button className="small-btn" type="submit" >add</button>
                </form>
                {todoItems}
            </div>
        )
    }
}
export default App
